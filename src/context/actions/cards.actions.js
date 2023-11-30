import i18next from "i18next"

import { pbGetList, pbUpdateRecord } from "../../services"
import { types } from "../global.reducer"
import { constants } from "../global.types"

import { handleErrorModal } from "./global.actions"

const getCardsList = async ({ user }, dispatch) => {
   try {
      if (user?.id) {
         const cardsList = await pbGetList(constants.STUDY_VOCABULARY, {
            filter: `user_id = "${user.id}"`,
            expand: "word_id",
            fields:
               "expand.word_id.german_translation,expand.word_id.spanish_translation,id,level,last_time_seen,times_seen"
         })
         dispatch(cardActionTypes.setCards(cardsList))
      } else {
         handleErrorModal(i18next.t("constants.needSignUp" + " to get your cards list"))
      }
   } catch (error) {
      handleErrorModal(error)
   }
}

const updateCard = async (card) => {
   const currentDate = new Date()
   card.last_time_seen = currentDate
   card.times_seen = Number(card.times_seen + 1)
   await pbUpdateRecord(constants.STUDY_VOCABULARY, card.id, card)
}

export const cardActionTypes = {
   setCards: (payload) => ({
      type: types.SET_CARDS,
      payload
   })
}

export { getCardsList, updateCard }
