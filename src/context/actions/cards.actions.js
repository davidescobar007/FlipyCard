import { pbGetList, pbUpdateRecord } from "../../services"
import { types } from "../global.reducer"
import { constants } from "../global.types"

import { handleErrorModal } from "./global.actions"

const getCardsList = async (user, dispatch) => {
   try {
      const cardsList = await pbGetList(constants.STUDY_VOCABULARY, {
         filter: `user_id = "${user.id}"`,
         expand: "word_id",
         fields: "expand.word_id.german_translation,expand.word_id.spanish_translation,id,level,last_time_seen"
      })
      dispatch(cardActionTypes.setCards(cardsList))
   } catch (error) {
      handleErrorModal(dispatch, constants.NEED_SIGN_UP)
   }
}

const updateCard = async (card) => {
   await pbUpdateRecord(constants.STUDY_VOCABULARY, card.id, card)
}

export const cardActionTypes = {
   setCards: (payload) => ({
      type: types.SET_CARDS,
      payload
   })
}

export { getCardsList, updateCard }
