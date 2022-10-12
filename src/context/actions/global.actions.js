import { dynamicSearch } from "../../services"
import { createDinamicArray, toggleItemFromArray } from "../../utils"
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
import { types } from "../global.reducer"
import { queryOperators } from "../global.types"

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
            dispatch(cardActions.setCards(cardsArray))
            dispatch(cardActions.setDynamicCards([...cardsArray]))
            setRandomCard(dispatch, cardsArray)
         })
      dispatch(categoryActions.selectCetegories(categorySelected))
   } catch (error) {
      actionsHandler.error()
   }
}

const actionsHandler = {
   trigerMenu: () => ({
      type: types.IS_MENU_OPEN
   }),
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
