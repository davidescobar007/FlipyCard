/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from "prop-types"
import { createContext, useReducer } from "react"
import {
   actionsHandler,
   createCard,
   createCategory,
   deleteCard,
   getCardsByCategories,
   getCategories,
   setNextRandomCard,
   setRandomCard,
   updateRandomCard
} from "./global.actions"
import storeReducer, { initialStore } from "./global.reducer"
import { constants } from "./global.types"

const StoreContext = createContext()

const StoreProvider = ({ children }) => {
   const [state, dispatch] = useReducer(storeReducer, initialStore)

   const getCategoryList = () => getCategories(dispatch, constants.CATEGORIES)

   const getCardsListByCategories = (categoryName) =>
      getCardsByCategories(
         state,
         dispatch,
         constants.CARDS,
         constants.CATEGORY,
         categoryName
      )

   const saveNewCard = (cardData) =>
      createCard(state, dispatch, constants.CARDS, cardData)

   const createNewCategory = (category) =>
      createCategory(state, dispatch, {
         collection: constants.CATEGORIES,
         id: state.categoryId,
         category
      })

   const resetDynamicCards = (cards) => {
      dispatch(actionsHandler.cardActions.setDynamicCards([...cards]))
      setRandomCard(dispatch, cards)
   }

   const nextRandomCard = (cardToBeDeleted) =>
      setNextRandomCard(state, dispatch, cardToBeDeleted)

   const updateCard = (newDataForRandomCard) =>
      updateRandomCard(dispatch, newDataForRandomCard)

   const deleteCurrentCard = () => deleteCard(state, dispatch)

   const store = {
      state,
      saveNewCard,
      updateCard,
      nextRandomCard,
      deleteCurrentCard,
      getCategoryList,
      getCardsListByCategories,
      createNewCategory,
      resetDynamicCards
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
