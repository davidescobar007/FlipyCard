import { aiModelRequest, pbGetList } from "../../services"
import { types } from "../global.types"

import { searchTranslationFromSources } from "./translations.actions"

const getAiArticle = async () => {
   const data = await aiModelRequest({
      content:
         "you are a blogger and will write an article about the city of Prague in b2 german  in 150 words"
   })
   console.log(data)
}

const getArticlesList = async (dispatch) => {
   try {
      const data = await pbGetList("articles")
      dispatch(articleActionTypes.setArticles(data))
   } catch (error) {
      console.error(error)
      throw error
   }
}

const setSelectedArticle = async (article, dispatch) => {
   try {
      dispatch(articleActionTypes.setSelectedArticle(article))
   } catch (error) {
      console.error(error)
      throw error
   }
}

const setSelectedWord = async (word, selectedWordInState, dispatch) => {
   try {
      dispatch(articleActionTypes.setSelectedWord(word))
      selectedWordInState !== word &&
         searchTranslationFromSources(word, dispatch)
   } catch (error) {
      console.error(error)
      throw error
   }
}

const resetTranslation = async (dispatch) => {
   try {
      dispatch({ type: types.UPDATE_TRANSLATION })
   } catch (error) {
      console.error(error)
      throw error
   }
}

const articleActionTypes = {
   setArticles: (payload) => ({
      type: types.SET_ARTICLES,
      payload
   }),
   setSelectedArticle: (payload) => ({
      type: types.SET_SELECTED_ARTICLE,
      payload
   }),
   setSelectedWord: (payload) => ({
      type: types.SET_SELECTED_WORD,
      payload
   })
}

export {
   getAiArticle,
   getArticlesList,
   resetTranslation,
   setSelectedArticle,
   setSelectedWord
}
