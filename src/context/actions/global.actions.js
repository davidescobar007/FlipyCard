import { dynamicSearch } from "../../services"
import { createDinamicArray, toggleItemFromArray } from "../../utils"
import * as cardsActions from "./cards.actions"
import * as categoryActions from "./category.actions"
import * as sectionActions from "./section.actions"
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
            dispatch(cardsActions.cardActionTypes.setCards(cardsArray))
            dispatch(
               cardsActions.cardActionTypes.setDynamicCards([...cardsArray])
            )
            cardsActions.setRandomCard(dispatch, cardsArray)
         })
      dispatch(
         categoryActions.categoryActionTypes.selectCetegories(categorySelected)
      )
   } catch (error) {
      actionHandlerTypes.error()
   }
}

const actionHandlerTypes = {
   trigerMenu: () => ({
      type: types.IS_MENU_OPEN
   }),
   error: () => ({
      type: types.SERVICE_ERROR
   })
}

export {
   sectionActions,
   categoryActions,
   getCardsByCategories,
   cardsActions,
   actionHandlerTypes
}
