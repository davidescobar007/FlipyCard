import { pbGetList } from "../../services"
import { types } from "../global.reducer"
import { constants } from "../global.types"

import * as articlesActions from "./articles.actions"
import * as cardsActions from "./cards.actions"
import * as quizzesActions from "./quizzes.actions"
import * as translationsAction from "./translations.actions"
import * as usersActions from "./users.actions"

const handleErrorModal = (dispatch, message) => {
   dispatch(actionHandlerTypes.error(message))
   console.warn(message)
   let inputs = document.getElementById("modalWarning")
   inputs.checked = true
}

const getScoreList = async (dispatch) => {
   try {
      const scoreList = await pbGetList(constants.SCORE)
      dispatch(actionHandlerTypes.setScoreList(scoreList))
   } catch (error) {
      handleErrorModal(dispatch, error)
   }
}

const actionHandlerTypes = {
   setScoreList: (payload) => ({
      type: types.SET_SCORE_LIST,
      payload
   }),
   trigerMenu: () => ({
      type: types.IS_MENU_OPEN
   }),
   setUiTheme: () => ({
      type: types.SET_THEME
   }),
   error: (payload) => ({
      type: types.SERVICE_ERROR,
      payload
   })
}

export const actionLoaders = {
   loadingWordTranslation: (payload) => ({
      type: types.LOADING_WORD_TRANSLATION,
      payload
   }),
   loadingArticlesList: (payload) => ({
      type: types.LOADING_ARTICLE_LIST,
      payload
   }),
   loadingArticle: (payload) => ({
      type: types.LOADING_ARTICLE,
      payload
   }),
   loadingCards: (payload) => ({
      type: types.LOADING_CARDS,
      payload
   })
}
export {
   actionHandlerTypes,
   articlesActions,
   cardsActions,
   getScoreList,
   handleErrorModal,
   quizzesActions,
   translationsAction,
   usersActions
}
