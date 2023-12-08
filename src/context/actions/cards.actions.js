import i18next from "i18next"

import { pbGetList, pbUpdateRecord } from "../../services"
import { types } from "../global.reducer"
import { constants } from "../global.types"

import { actionLoaders, handleErrorModal } from "./global.actions"

const getCardsList = async ({ user }, dispatch, willItLoad = true) => {
   try {
      if (user?.id) {
         dispatch(actionLoaders.loadingCards(willItLoad))
         const cardsList = await pbGetList(constants.STUDY_VOCABULARY, {
            filter: `user_id = "${user.id}"`,
            expand: "word_id",
            fields:
               "expand.word_id.german_translation,expand.word_id.spanish_translation,id,level,last_time_seen,times_seen,level_history"
         })
         dispatch(cardActionTypes.setCards(cardsList))
         dispatch(actionLoaders.loadingCards(false))
      } else {
         handleErrorModal(i18next.t("constants.needSignUp"))
      }
   } catch (error) {
      handleErrorModal(error)
   }
}

const updateCard = async (card) => {
   const currentDate = new Date()
   card.last_time_seen = currentDate
   card.times_seen = Number(card.times_seen + 1)
   const levelHistoryObj = { level: card.level, date: currentDate }
   card.level_history = card.level_history?.length ? [...card.level_history, levelHistoryObj] : [levelHistoryObj]
   await pbUpdateRecord(constants.STUDY_VOCABULARY, card.id, card)
}

export const cardActionTypes = {
   setCards: (payload) => ({
      type: types.SET_CARDS,
      payload
   })
}

export { getCardsList, updateCard }
