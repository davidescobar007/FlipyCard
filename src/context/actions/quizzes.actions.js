import { pbGetSingleRecordQuery } from "../../services"
import { constants, types } from "../global.types"

import { handleErrorModal } from "./global.actions"

const getSingleQuizz = async (id, dispatch) => {
   try {
      const params = { collection: constants.QUIZZES, field: "article_id", param: id }
      const quizz = await pbGetSingleRecordQuery(params)
      dispatch(quizzActionTypes.setQuizz(quizz))
   } catch (error) {
      handleErrorModal(error)
   }
}

const quizzActionTypes = {
   setQuizz: (payload) => ({
      type: types.SET_QUIZZ,
      payload
   })
}

export { getSingleQuizz }
