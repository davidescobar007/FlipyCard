import { types } from "../global.reducer"

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

const actionHandlerTypes = {
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

export {
   actionHandlerTypes,
   articlesActions,
   cardsActions,
   handleErrorModal,
   quizzesActions,
   translationsAction,
   usersActions
}
