import { getCollectionListByArray } from "../services"
import { toggleItemFromArray } from "../utils"
import {
   cardActions,
   createCard,
   setNextRandomCard,
   setRandomCard,
   updateRandomCard
} from "./cards.actions"
import {
   createCategory,
   getCategories,
   categoryActions
} from "./category.actions"
import { types } from "./global.reducer"

const getCardsByCategories = (state, dispatch, collection, field, category) => {
   try {
      let categorySelected = toggleItemFromArray(
         state.categorySelected,
         category
      )
      categorySelected.length &&
         getCollectionListByArray(collection, field, categorySelected).then(
            (cardsArray) => {
               dispatch(actionsHandler.cardActions.setCards(cardsArray))
               setRandomCard(dispatch, cardsArray)
            }
         )
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
   createCategory,
   getCategories,
   getCardsByCategories,
   actionsHandler
}
