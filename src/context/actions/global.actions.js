import { types } from "../global.reducer"

import * as articlesActions from "./articles.actions"
import * as cardsActions from "./cards.actions"
import * as quizzesActions from "./quizzes.actions"
import * as usersActions from "./users.actions"
const googleLoginSuccess = async () => {}

export const pbhandleLogin = async () => {
   // const redirectUrl = import.meta.env.VITE_ENVIRONMENT
   // const url = authMethods.authProviders[0].authUrl + redirectUrl
   // console.log("url= ", url)
   // window.location.href = url
   // const newUrl = new URL(window.location.href)
   // const code = newUrl.searchParams.get("code")
   // console.debug()
   // pbSignUp("google", code, authMethods.codeVerifier, import.meta.env.VITE_ENVIRONMENT)
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

export { actionHandlerTypes, articlesActions, cardsActions, googleLoginSuccess, quizzesActions, usersActions }
