import { v4 as uuidv4 } from "uuid"

import { getDataByQuery, setDocument } from "../../services"
import { constants, types } from "../global.types"

export const getSections = (state, dispatch) => {
   getDataByQuery(constants.SECTIONS, "userId", "").then((data) => {
      dispatch(sectionActions.updateSection(data))
      if (!state.selectedSection) {
         dispatch(sectionActions.setSection(data[0]))
      }
   })
}
export const createSection = (state, dispatch, section) => {
   const { sections } = state
   const id = uuidv4()
   const newSection = {
      userId: "",
      section,
      isPublic: true // to be changed once there is sing up option
   }
   const newSectionList = [...sections, { ...newSection, id }]
   setDocument(constants.SECTIONS, newSection, id)
   dispatch(sectionActions.updateSection(newSectionList))
   document.getElementById("addSection").checked = false // this close the modal once it is saved
}

export const setSection = (dispatch, section) => {
   dispatch(sectionActions.setSection(section))
}

const sectionActions = {
   updateSection: (payload) => ({
      type: types.UPDATE_SECTIONS,
      payload
   }),
   setSection: (payload) => ({
      type: types.SET_SECTION,
      payload
   })
}
