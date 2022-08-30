import { dynamicSearch } from "../services"
import { createDinamicArray, toggleItemFromArray } from "../utils"
import {
   cardActions,
   createCard,
   deleteCard,
   setNextRandomCard,
   setRandomCard,
   updateRandomCard
} from "./cards.actions"
import {
   categoryActions,
   createCategory,
   getCategories
} from "./category.actions"
import { types } from "./global.reducer"
import { queryOperators } from "./global.types"

const getCardsByCategories = (state, dispatch, collection, field, category) => {
   try {
      let categorySelected = toggleItemFromArray(
         state.categorySelected,
         category
      )
      categorySelected.length &&
         dynamicSearch(
            collection,
            createDinamicArray(categorySelected, queryOperators.EQUAL_TO)
         ).then((cardsArray) => {
            dispatch(actionsHandler.cardActions.setCards(cardsArray))
            setRandomCard(dispatch, cardsArray)
         })
      dispatch(
         actionsHandler.categoryActions.selectCetegories(categorySelected)
      )
   } catch (error) {
      actionsHandler.error()
   }
}

const actionsHandler = {
   categoryActions,
   cardActions,
   error: () => ({
      type: types.SERVICE_ERROR
   })
}

export {
   createCard,
   setNextRandomCard,
   setRandomCard,
   updateRandomCard,
   deleteCard,
   createCategory,
   getCategories,
   getCardsByCategories,
   actionsHandler
}
