import { toast } from "react-toastify"

import { pbCreateRecord, pbGetSingleRecord } from "../../services"
import { getWordsTranslationFetchImplementation } from "../../services/implementation"
import { debounce, removePunctuation } from "../../utils"
import { constants, types } from "../global.types"

import { handleErrorModal } from "./global.actions"

const resetTranslation = async (dispatch) => {
   try {
      dispatch({ type: types.UPDATE_TRANSLATION })
   } catch (error) {
      handleErrorModal(dispatch, error)
   }
}

const getWordsTranslationFromDB = async (wordToTranslate, dispatch) => {
   const params1 = { collection: constants.VOCABULARY, page: 1, perPage: 1 }
   const params2 = {
      field: "conjugation.allConjugations",
      param: removePunctuation(wordToTranslate)
   }

   const translation = await pbGetSingleRecord(params1, params2)
   dispatch(translationActionTypes.setArticles(translation.items[0]))
   return translation
}

const getWordsTranslationFromAPI = async (wordToTranslate, dispatch) => {
   try {
      const translation = await getWordsTranslationFetchImplementation(removePunctuation(wordToTranslate))
      return translation
   } catch (error) {
      handleErrorModal(dispatch, error)
   }
}

const saveTranslationToDB = async (translation, dispatch) => {
   try {
      const recordCreated = await pbCreateRecord(constants.VOCABULARY, translation)
      dispatch(translationActionTypes.setArticles(recordCreated))
      return recordCreated
   } catch (error) {
      handleErrorModal(dispatch, error)
   }
}

const searchTranslationFromSources = async (wordToTranslate, dispatch) => {
   const translationFromDB = await getWordsTranslationFromDB(wordToTranslate, dispatch)
   if (translationFromDB.items.length == 0) {
      const translationFromAPI = await getWordsTranslationFromAPI(wordToTranslate, dispatch)
      if (translationFromAPI.status === 204) {
         handleErrorModal(dispatch, "Unfortunally we have no found any translation for that word ")
         return
      }
      translationFromAPI.data && saveTranslationToDB(translationFromAPI.data, dispatch)
   }
}

const saveVocabularyToStudy = (state, dispatch) => {
   try {
      if (state?.user?.userId !== null && state?.selectedWordTranslation?.id) {
         const data = {
            user_id: state.user.userId,
            word_id: state.selectedWordTranslation.id,
            last_time_seen: null,
            level: null
         }
         debounce(pbCreateRecord(constants.STUDY_VOCABULARY, data))
         toast.success("Saved to your vocabulary.")
      } else {
         handleErrorModal(dispatch, constants.NEED_SIGN_UP)
      }
   } catch (error) {
      handleErrorModal(dispatch, error)
   }
}

const translationActionTypes = {
   setArticles: (payload) => ({
      type: types.UPDATE_TRANSLATION,
      payload
   })
}

export {
   getWordsTranslationFromAPI,
   getWordsTranslationFromDB,
   resetTranslation,
   saveTranslationToDB,
   saveVocabularyToStudy,
   searchTranslationFromSources
}
