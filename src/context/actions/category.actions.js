import { deleteDocument, getDataByQuery, setDocument } from "../../services"
import { getSortedObjectKeys, toggleItemFromArray } from "../../utils"
import { types } from "../global.reducer"
import { constants } from "../global.types"

export const createCategory = (state, dispatch, category) => {
   const { categories } = state
   const newCategory = {
      name: category,
      section: state.selectedSection
   }
   setDocument(constants.CATEGORIES, newCategory)

   !categories.some((item) => item.name === category) &&
      dispatch(categoryActionTypes.setCategory([...categories, newCategory]))
   document.getElementById("my-modal-4").checked = false // this close the modal once it is saved
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

export const deleteCategory = (state, dispatch, category) => {
   const { categories } = state
   const categoriesListWithDeletedItem = toggleItemFromArray(
      categories,
      category
   )
   try {
      deleteDocument(constants.CATEGORIES, category.id).then(() => {
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
