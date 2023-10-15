import { pbCreateRecord, pbGetSingleRecord } from "../../services"
import { getWordsTranslationFetchImplementation } from "../../services/implementation"
import { removePunctuation } from "../../utils"
import { constants, types } from "../global.types"

const resetTranslation = async (dispatch) => {
   try {
      dispatch({ type: types.UPDATE_TRANSLATION })
   } catch (error) {
      console.error(error)
      throw error
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
      dispatch(translationActionTypes.setArticles(translation.data))
      return translation
   } catch (error) {
      console.log(error)
      throw error
   }
}

const saveTranslationToDB = async (translation) => {
   try {
      await pbCreateRecord(constants.VOCABULARY, translation)
   } catch (error) {
      console.log(error)
      throw error
   }
}

const searchTranslationFromSources = async (wordToTranslate, dispatch) => {
   const translationFromDB = await getWordsTranslationFromDB(wordToTranslate, dispatch)
   if (translationFromDB.items.length == 0) {
      const translationFromAPI = await getWordsTranslationFromAPI(wordToTranslate, dispatch)
      if (translationFromAPI.status === 204) {
         alert("Unfortunally we have no found any translation for that word ")
         return
      }
      translationFromAPI.data && saveTranslationToDB(translationFromAPI.data)
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
   searchTranslationFromSources
}
