import { pbGetSingleRecordQuery } from "../../services"
import { constants, types } from "../global.types"

const getSingleQuizz = async (id, dispatch) => {
   try {
      const params1 = { collection: constants.QUIZZES }
      const params2 = { field: "article_id", param: id }
      const quizz = await pbGetSingleRecordQuery(params1, params2)
      dispatch(quizzActionTypes.setQuizz(quizz))
   } catch (error) {
      console.log(error)
   }
}

const quizzActionTypes = {
   setQuizz: (payload) => ({
      type: types.SET_QUIZZ,
      payload
   })
}

export { getSingleQuizz }
