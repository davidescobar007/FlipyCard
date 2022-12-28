import { getCollectionList, setDocument } from "../../services"
import { constants, types } from "../global.types"

export const getSections = (state, dispatch) => {
   getCollectionList(constants.SECTIONS).then((data) => {
      data = { data: data[0].data.sectionList, id: data[0].id }
      dispatch(sectionActions.updateSection(data))
      if (!state.selectedSection) {
         dispatch(sectionActions.setSection(data.data[0]))
      }
   })
}
export const createSection = (state, dispatch, section) => {
   const { sections } = state
   const newSectionList = { ...sections, data: [...sections.data, section] }
   setDocument(constants.SECTIONS, newSectionList)
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
