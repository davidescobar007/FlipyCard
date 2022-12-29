import { v4 as uuidv4 } from "uuid"

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
   const id = uuidv4()
   setDocument(constants.CATEGORIES, newCategory, id)
   newCategory.id = id
   !categories.some((item) => item.name === category) &&
      dispatch(categoryActionTypes.setCategory([...categories, newCategory]))
   document.getElementById("addCategory").checked = false // this close the modal once it is saved
}

export const getCategories = (state, dispatch, collectionName) => {
   try {
      getDataByQuery(
         collectionName,
         "section",
         state.selectedSection.section
      ).then((dataList) => {
         console.log(dataList)
         dataList = dataList.map((item) => getSortedObjectKeys(item))
         dispatch(categoryActionTypes.setCategory(dataList))
      })
   } catch (error) {
      throw new Error()
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
