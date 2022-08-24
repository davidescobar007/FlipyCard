/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from "prop-types"
import { createContext, useReducer } from "react"
import {
   actionsHandler,
   createCard,
   createCategory,
   getCardsByCategories,
   getCategories,
   setNextRandomCard
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

   const setCards = (payload) => actionsHandler.card.setCards(payload)

   const nextRandomCard = (cardToBeDeleted) =>
      setNextRandomCard(state, dispatch, cardToBeDeleted)

   const store = {
      state,
      getCategoryList,
      getCardsListByCategories,
      saveNewCard,
      createNewCategory,
      setCards,
      nextRandomCard
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
