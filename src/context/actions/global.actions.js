import { types } from "../global.reducer"

import * as articlesActions from "./articles.actions"
import * as cardsActions from "./cards.actions"
import * as quizzesActions from "./quizzes.actions"

const googleLoginSuccess = (credentialResponse) => {
   console.log(credentialResponse)
}

const actionHandlerTypes = {
   trigerMenu: () => ({
      type: types.IS_MENU_OPEN
   }),
   setUiTheme: () => ({
      type: types.SET_THEME
   }),
   error: () => ({
      type: types.SERVICE_ERROR
   })
}

export { actionHandlerTypes, articlesActions, cardsActions, googleLoginSuccess, quizzesActions }
