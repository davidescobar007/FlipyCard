import { getCollectionList, updateDocument } from "../../services"
import { types } from "../global.reducer"

export const createCategory = async (state, dispatch, payload) => {
   const { collection, id, category } = payload
   const { categories } = state
   await updateDocument(collection, id, category)
   !categories.includes(category) &&
      dispatch(categoryActions.setCategory(category))
}

export const getCategories = (dispatch, payload) => {
   try {
      getCollectionList(payload).then((data) => {
         dispatch(categoryActions.setCategory(data[0].data.categoryList))
         dispatch(categoryActions.setCategoriesId(data[0].id))
      })
   } catch (error) {
      categoryActions.error()
   }
}

export const categoryActions = {
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
