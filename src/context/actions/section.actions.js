import { pbCreateRecord, pbGetList } from "../../services"
import { constants, types } from "../global.types"

export const getSections = async (state, dispatch) => {
   try {
      const data = await pbGetList(constants.PACKS)
      dispatch(sectionActions.updateSection(data))
      if (!state.selectedSection) {
         dispatch(sectionActions.setSection(data[0]))
      }
   } catch (error) {
      console.warn(error)
   }
}

export const createSection = (state, dispatch, section) => {
   const { sections } = state
   const newPack = {
      userID: "g8rb1zowbrugehp",
      name: section,
      isPublic: true
   }
   try {
      pbCreateRecord(newPack, constants.PACKS).then((data) => {
         const newSectionList = [...sections, { ...data }]
         dispatch(sectionActions.updateSection(newSectionList))
      })
      document.getElementById("addSection").checked = false // this close the modal once it is saved
   } catch (error) {
      console.warn(error)
   }
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
