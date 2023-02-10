import { pbGetDataByQuery, pbGetList } from "../../services"
import { queryStringAnsembler, toggleItemFromArray } from "../../utils"
import { types } from "../global.reducer"
import { constants } from "../global.types"

import * as cardsActions from "./cards.actions"
import * as categoryActions from "./category.actions"
import * as sectionActions from "./section.actions"

const getCardsByCategories = async (state, dispatch, collection, category) => {
   try {
      let categorySelected = toggleItemFromArray(
         state.categorySelected,
         category
      )
      const filterQuery = queryStringAnsembler("categoryID", categorySelected)
      if (categorySelected.length) {
         let cards = await pbGetList(collection, filterQuery)
         dispatch(cardsActions.cardActionTypes.setCards(cards))
         dispatch(cardsActions.cardActionTypes.setDynamicCards([...cards]))
         cardsActions.setRandomCard(dispatch, cards)
      }
      dispatch(
         categoryActions.categoryActionTypes.selectCetegories(categorySelected)
      )
   } catch (error) {
      actionHandlerTypes.error()
      console.warn(error)
   }
}

const getCategoriesBySections = async (state, dispatch, section) => {
   if (state.selectedSection?.id !== section?.id) {
      dispatch(categoryActions.categoryActionTypes.selectCetegories([]))
   }
   try {
      dispatch(actionHandlerTypes.setSection(section))
      const categories = await pbGetDataByQuery(
         { collection: constants.CATEGORIES },
         { field: "packID", param: section.id }
      )
      dispatch(actionHandlerTypes.setCategory(categories.items))
   } catch (error) {
      actionHandlerTypes.error()
      console.warn(error)
   }
}

const actionHandlerTypes = {
   trigerMenu: () => ({
      type: types.IS_MENU_OPEN
   }),
   setSection: (payload) => ({
      type: types.SET_SECTION,
      payload
   }),
   setCategory: (payload) => ({
      type: types.SET_CATEGORIES,
      payload
   }),
   setUiTheme: () => ({
      type: types.SET_THEME
   }),
   error: () => ({
      type: types.SERVICE_ERROR
   })
}

export {
   actionHandlerTypes,
   cardsActions,
   categoryActions,
   getCardsByCategories,
   getCategoriesBySections,
   sectionActions
}
