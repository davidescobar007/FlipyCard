import { createContext, useMemo, useReducer } from "react"
import PropTypes from "prop-types"

import * as action from "./actions/global.actions"
import storeReducer, { initialStore } from "./global.reducer"

const StoreContext = createContext()

function StoreProvider({ children }) {
   const [state, dispatch] = useReducer(storeReducer, initialStore)

   const updateCard = (card) => action.cardsActions.updateCard(card)

   const setUiTheme = () => dispatch(action.actionHandlerTypes.setUiTheme())

   const getArticlesList = () => action.articlesActions.getArticlesList(dispatch)

   const setSelectedArticle = (article) => action.articlesActions.setSelectedArticle(article, dispatch)

   const setSelectedWord = (word) => action.articlesActions.setSelectedWord(word, state.selectedWord, dispatch)

   const resetTranslation = () => action.articlesActions.resetTranslation(dispatch)

   const getSingleArticle = (id) => action.articlesActions.getSingleArticle(id, dispatch)

   const getSingleQuizz = (id) => action.quizzesActions.getSingleQuizz(id, dispatch)

   const getLoginMethods = () => action.usersActions.getLoginMethods(dispatch)

   const googleLogin = () => action.usersActions.googleLogin(dispatch)

   const logOut = () => action.usersActions.logOut(dispatch)

   const updateUserState = () => action.usersActions.updateUserState(dispatch)

   const saveVocabularyToStudy = () => action.translationsAction.saveVocabularyToStudy(state, dispatch)

   const handleErrorModal = (message) => action.handleErrorModal(dispatch, message)

   const getCardsList = () => action.cardsActions.getCardsList(state.user, dispatch)

   const updateUserScore = (id, newScore) => action.usersActions.updateUserScore(id, newScore)

   const getScoreList = () => action.getScoreList(dispatch)

   const store = useMemo(
      () => ({
         state,
         updateCard,
         setUiTheme,
         getArticlesList,
         setSelectedArticle,
         setSelectedWord,
         resetTranslation,
         getSingleArticle,
         getSingleQuizz,
         getLoginMethods,
         googleLogin,
         logOut,
         updateUserState,
         saveVocabularyToStudy,
         handleErrorModal,
         getCardsList,
         updateUserScore,
         getScoreList
      }),
      [state]
   )

   return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

StoreProvider.propTypes = {
   children: PropTypes.element.isRequired
}

export { StoreContext }
export default StoreProvider
