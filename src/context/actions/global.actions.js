import { dynamicSearch, getDataByQuery } from "../../services"
import { createDinamicArray, toggleItemFromArray } from "../../utils"
import * as cardsActions from "./cards.actions"
import * as categoryActions from "./category.actions"
import * as sectionActions from "./section.actions"
import { types } from "../global.reducer"
import { queryOperators } from "../global.types"

const getCardsByCategories = (state, dispatch, collection, category) => {
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

const getCategoriesBySections = (dispatch, collectionName, section) => {
   try {
      dispatch(actionHandlerTypes.setSection(section))
      getDataByQuery(collectionName, "section", section).then((dataList) => {
         dispatch(actionHandlerTypes.setCategory(dataList))
      })
   } catch (error) {
      actionHandlerTypes.error()
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
   sectionActions,
   categoryActions,
   getCardsByCategories,
   cardsActions,
   actionHandlerTypes,
   getCategoriesBySections
}
