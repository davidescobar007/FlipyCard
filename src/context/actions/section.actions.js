import { getCollectionList } from "../../services"
import { constants, types } from "../global.types"

export const getSections = (dispatch) => {
   getCollectionList(constants.SECTIONS).then((data) => {
      dispatch(sectionActions.getSection(data[0].data.sectionList))
      dispatch(sectionActions.setSection(data[0].data.sectionList[0]))
   })
}

export const setSection = (dispatch, section) => {
   dispatch(sectionActions.setSection(section))
}

const sectionActions = {
   getSection: (payload) => ({
      type: types.UPDATE_SECTIONS,
      payload
   }),
   setSection: (payload) => ({
      type: types.SET_SECTION,
      payload
   })
}
