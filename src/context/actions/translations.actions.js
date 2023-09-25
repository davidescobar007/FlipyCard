import { pbCreateRecord, pbGetSingleRecord } from "../../services"
import { getWordsTranslationFetchImplementation } from "../../services/implementation"
import { removePunctuation, transformData } from "../../utils"
import { constants, types } from "../global.types"

const resetTranslation = async (dispatch) => {
   try {
      dispatch({ type: types.UPDATE_TRANSLATION })
   } catch (error) {
      console.error(error)
      throw error
   }
}

const getWordsTranslationFromDB = (wordToTranslate, dispatch) => {
   const params1 = { collection: constants.VOCABULARY, page: 1, perPage: 1 }
   const params2 = {
      field: "german_translation",
      param: removePunctuation(wordToTranslate)
   }
   const translation = pbGetSingleRecord(params1, params2)
   dispatch(translationActionTypes.setArticles(translation))
   return translation
}

const getWordsTranslationFromAPI = async (wordToTranslate, dispatch) => {
   try {
      const translation = await getWordsTranslationFetchImplementation(
         removePunctuation(wordToTranslate)
      )
      if (translation.status === 200) {
         dispatch(translationActionTypes.setArticles(translation))
      }
      return translation.json()
   } catch (error) {
      console.log(error)
      throw error
   }
}

const saveTranslationToDB = async (translation) => {
   const data = {
      german_translation: translation.l1_text,
      spanish_translation: translation.l2_text,
      english_translation: null,
      user: null,
      type_of_word: translation.wortart,
      examples: translation?.sentences && transformData(translation.sentences)
   }
   try {
      await pbCreateRecord(constants.VOCABULARY, data)
   } catch (error) {
      console.log(error)
      throw error
   }
}

const searchTranslationFromSources = async (wordToTranslate, dispatch) => {
   const translationFromDB = await getWordsTranslationFromDB(
      wordToTranslate,
      dispatch
   )
   if (translationFromDB.items.length == 0) {
      const translationFromAPI = await getWordsTranslationFromAPI(
         wordToTranslate,
         dispatch
      )
      if (translationFromAPI.status === 204) {
         alert("Unfortunally we have no found any translation for that word ")
         return
      }
      translationFromAPI[0] && saveTranslationToDB(translationFromAPI[0])
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
