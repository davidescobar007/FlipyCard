import { updateDocument, getDataByQuery } from "../../services"
import { getSortedObjectKeys } from "../../utils"
import { types } from "../global.reducer"

export const createCategory = async (state, dispatch, payload) => {
   const { collection, id, category } = payload
   const { categories } = state
   await updateDocument(collection, id, category)
   !categories.includes(category) &&
      dispatch(categoryActionTypes.setCategory(category))
}

export const getCategories = (state, dispatch, collectionName) => {
   try {
      getDataByQuery(collectionName, "section", state.selectedSection).then(
         (dataList) => {
            dataList = dataList.map((item) => getSortedObjectKeys(item))
            dispatch(categoryActionTypes.setCategory(dataList))
         }
      )
   } catch (error) {
      categoryActionTypes.error()
   }
}

export const categoryActionTypes = {
   setCategory: (payload) => ({
      type: types.SET_CATEGORIES,
      payload
   }),
   setCategoriesId: (payload) => ({
      type: types.CATEGORY_ID,
      payload
   }),
   createCategory: (payload) => ({
      type: types.CREATE_CATEGORY,
      payload
   }),
   selectCetegories: (payload) => ({
      type: types.CATEGORY_SELECTED,
      payload
   })
}
