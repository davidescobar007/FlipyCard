import {
   pbCreateRecord,
   pbDeleteRecord,
   pbGetDataByQuery
} from "../../services"
import { getSortedObjectKeys, toggleItemFromArray } from "../../utils"
import { types } from "../global.reducer"
import { constants } from "../global.types"

export const createCategory = async (state, dispatch, category) => {
   const { categories } = state
   const newCategory = {
      name: category,
      packID: state.selectedSection.id
   }
   try {
      const reponse = await pbCreateRecord(constants.CATEGORIES, newCategory)
      !categories.some((item) => item.name === category) &&
         dispatch(categoryActionTypes.setCategory([...categories, reponse]))
   } catch (error) {
      console.warn(error)
      alert("error happened", error)
   }
   document.getElementById("addCategory").checked = false // this close the modal once it is saved
}

export const getCategories = async (state, dispatch) => {
   try {
      const categories = await pbGetDataByQuery(
         { collection: constants.CATEGORIES },
         { field: "packID", param: state.selectedSection.id }
      )
      const categoriesSorted = categories.items.map((item) =>
         getSortedObjectKeys(item)
      )
      dispatch(categoryActionTypes.setCategory(categoriesSorted))
   } catch (error) {
      console.warn(error)
   }
}

export const deleteCategory = (state, dispatch, category) => {
   const { categories } = state
   const categoriesListWithDeletedItem = toggleItemFromArray(
      categories,
      category
   )
   try {
      pbDeleteRecord(constants.CATEGORIES, category.id).then(() => {
         dispatch(
            categoryActionTypes.deleteCategory(categoriesListWithDeletedItem)
         )
      })
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
   }),
   deleteCategory: (payload) => ({
      type: types.DELETE_CATEGORY,
      payload
   })
}
