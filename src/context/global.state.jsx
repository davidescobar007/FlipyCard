import PropTypes from "prop-types"
import { useMemo } from "react"
import { createContext, useReducer } from "react"
import * as action from "./actions/global.actions"
import storeReducer, { initialStore } from "./global.reducer"
import { constants } from "./global.types"

const StoreContext = createContext()

function StoreProvider({ children }) {
   const [state, dispatch] = useReducer(storeReducer, initialStore)

   const getCategoryList = () =>
      action.categoryActions.getCategories(dispatch, constants.CATEGORIES)

   const getCardsListByCategories = (categoryName) =>
      action.getCardsByCategories(
         state,
         dispatch,
         constants.CARDS,
         constants.CATEGORY,
         categoryName
      )

   const saveNewCard = (cardData) =>
      action.cardsActions.createCard(state, dispatch, constants.CARDS, cardData)

   const createCardsAtOnce = (cardsList) =>
      action.cardsActions.createCardsAtOnce(state, cardsList, constants.CARDS)

   const createNewCategory = (category) =>
      action.categoryActions.createCategory(state, dispatch, {
         collection: constants.CATEGORIES,
         id: state.categoryId,
         category,
         section: state.selectedSection
      })

   const resetDynamicCards = (cards) => {
      dispatch(action.cardsActions.cardActionTypes.setDynamicCards([...cards]))
      action.cardsActions.setRandomCard(dispatch, cards)
   }

   const nextRandomCard = (cardToBeDeleted) =>
      action.cardsActions.setNextRandomCard(state, dispatch, cardToBeDeleted)

   const updateCard = (newDataForRandomCard) =>
      action.cardsActions.updateRandomCard(dispatch, newDataForRandomCard)

   const deleteCurrentCard = () =>
      action.cardsActions.deleteCard(state, dispatch)

   const trigerAsideMenu = () =>
      dispatch(action.actionHandlerTypes.trigerMenu())

   const getSections = () => action.sectionActions.getSections(dispatch)

   const setSection = (section) =>
      action.sectionActions.setSection(dispatch, section)

   const getCategoriesBySections = (section) =>
      action.getCategoriesBySections(dispatch, constants.CATEGORIES, section)

   const store = useMemo(
      () => ({
         state,
         saveNewCard,
         createCardsAtOnce,
         updateCard,
         nextRandomCard,
         deleteCurrentCard,
         getCategoryList,
         getCardsListByCategories,
         createNewCategory,
         resetDynamicCards,
         trigerAsideMenu,
         getSections,
         setSection,
         getCategoriesBySections
      }),
      [
         state,
         saveNewCard,
         createCardsAtOnce,
         updateCard,
         nextRandomCard,
         deleteCurrentCard,
         getCategoryList,
         getCardsListByCategories,
         createNewCategory,
         resetDynamicCards,
         trigerAsideMenu,
         getSections,
         setSection,
         getCategoriesBySections
      ]
   )

   return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
   )
}

StoreProvider.propTypes = {
   children: PropTypes.element.isRequired
}

export { StoreContext }
export default StoreProvider
