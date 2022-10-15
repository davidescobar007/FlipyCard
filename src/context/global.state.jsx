/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from "prop-types"
import { createContext, useReducer } from "react"
import * as action from "./actions/global.actions"
import storeReducer, { initialStore } from "./global.reducer"
import { constants } from "./global.types"

const StoreContext = createContext()

function StoreProvider({ children }) {
   const [state, dispatch] = useReducer(storeReducer, initialStore)

   const getCategoryList = () =>
      action.getCategories(dispatch, constants.CATEGORIES)

   const getCardsListByCategories = (categoryName) =>
      action.getCardsByCategories(
         state,
         dispatch,
         constants.CARDS,
         constants.CATEGORY,
         categoryName
      )

   const saveNewCard = (cardData) =>
      action.createCard(state, dispatch, constants.CARDS, cardData)

   const createNewCategory = (category) =>
      action.createCategory(state, dispatch, {
         collection: constants.CATEGORIES,
         id: state.categoryId,
         category,
         section: state.selectedSection
      })

   const resetDynamicCards = (cards) => {
      dispatch(action.actionsHandler.cardActions.setDynamicCards([...cards]))
      action.setRandomCard(dispatch, cards)
   }

   const nextRandomCard = (cardToBeDeleted) =>
      action.setNextRandomCard(state, dispatch, cardToBeDeleted)

   const updateCard = (newDataForRandomCard) =>
      action.updateRandomCard(dispatch, newDataForRandomCard)

   const deleteCurrentCard = () => action.deleteCard(state, dispatch)

   const trigerAsideMenu = () => dispatch(action.actionsHandler.trigerMenu())
   const getSections = () => action.sectionActions.getSections(dispatch)
   const setSection = (section) =>
      action.sectionActions.setSection(dispatch, section)

   const store = {
      state,
      saveNewCard,
      updateCard,
      nextRandomCard,
      deleteCurrentCard,
      getCategoryList,
      getCardsListByCategories,
      createNewCategory,
      resetDynamicCards,
      trigerAsideMenu,
      getSections,
      setSection
   }

   return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
   )
}

StoreProvider.propTypes = {
   children: PropTypes.element
}

export { StoreContext }
export default StoreProvider
