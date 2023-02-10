import { createContext, useMemo, useReducer } from "react"
import PropTypes from "prop-types"

import * as action from "./actions/global.actions"
import storeReducer, { initialStore } from "./global.reducer"
import { constants } from "./global.types"

const StoreContext = createContext()

function StoreProvider({ children }) {
   const [state, dispatch] = useReducer(storeReducer, initialStore)

   const getCategoryList = () =>
      action.categoryActions.getCategories(
         state,
         dispatch,
         constants.CATEGORIES
      )

   const getCardsListByCategories = (categoryName) =>
      action.getCardsByCategories(
         state,
         dispatch,
         constants.CARDS,
         categoryName
      )

   const saveNewCard = (cardData) =>
      action.cardsActions.createCard(state, dispatch, constants.CARDS, cardData)

   const createCardsAtOnce = (cardsList) =>
      action.cardsActions.createCardsAtOnce(state, cardsList)

   const createNewCategory = (category) =>
      action.categoryActions.createCategory(state, dispatch, category)

   const resetDynamicCards = (cards) => {
      dispatch(action.cardsActions.cardActionTypes.setDynamicCards([...cards]))
      action.cardsActions.setRandomCard(dispatch, cards)
   }

   const nextRandomCard = (cardToBeDeleted) =>
      action.cardsActions.setNextRandomCard(state, dispatch, cardToBeDeleted)

   const updateCard = (newDataForRandomCard) =>
      action.cardsActions.updateCard(state, dispatch, newDataForRandomCard)

   const deleteCurrentCard = () =>
      action.cardsActions.deleteCard(state, dispatch)

   const trigerAsideMenu = () =>
      dispatch(action.actionHandlerTypes.trigerMenu())

   const getSections = () => action.sectionActions.getSections(state, dispatch)

   const setSection = (section) =>
      action.sectionActions.setSection(dispatch, section)

   const getCategoriesBySections = (section) =>
      action.getCategoriesBySections(state, dispatch, section)

   const setUiTheme = () => {
      dispatch(action.actionHandlerTypes.setUiTheme())
   }

   const deleteCategory = (category) => {
      action.categoryActions.deleteCategory(state, dispatch, category)
   }

   const createSection = (section) => {
      action.sectionActions.createSection(state, dispatch, section)
   }

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
         getCategoriesBySections,
         setUiTheme,
         deleteCategory,
         createSection
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
         getCategoriesBySections,
         setUiTheme,
         deleteCategory,
         createSection
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
