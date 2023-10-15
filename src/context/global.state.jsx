import { createContext, useMemo, useReducer } from "react"
import PropTypes from "prop-types"

import * as action from "./actions/global.actions"
import storeReducer, { initialStore } from "./global.reducer"
import { constants } from "./global.types"

const StoreContext = createContext()

function StoreProvider({ children }) {
   const [state, dispatch] = useReducer(storeReducer, initialStore)

   const saveNewCard = (cardData) => action.cardsActions.createCard(state, dispatch, constants.CARDS, cardData)

   const createCardsAtOnce = (cardsList) => action.cardsActions.createCardsAtOnce(state, cardsList)

   const resetDynamicCards = (cards) => {
      dispatch(action.cardsActions.cardActionTypes.setDynamicCards([...cards]))
      action.cardsActions.setRandomCard(dispatch, cards)
   }

   const nextRandomCard = (cardToBeDeleted) =>
      action.cardsActions.setNextRandomCard(state, dispatch, cardToBeDeleted)

   const updateCard = (newDataForRandomCard) =>
      action.cardsActions.updateCard(state, dispatch, newDataForRandomCard)

   const deleteCurrentCard = () => action.cardsActions.deleteCard(state, dispatch)

   const setUiTheme = () => {
      dispatch(action.actionHandlerTypes.setUiTheme())
   }

   const googleLoginSuccess = (credentialResponse) => {
      action.googleLoginSuccess(credentialResponse)
   }

   const getArticlesList = () => action.articlesActions.getArticlesList(dispatch)

   const setSelectedArticle = (article) => action.articlesActions.setSelectedArticle(article, dispatch)

   const setSelectedWord = (word) => action.articlesActions.setSelectedWord(word, state.selectedWord, dispatch)

   const resetTranslation = () => action.articlesActions.resetTranslation(dispatch)

   const getSingleArticle = (id) => action.articlesActions.getSingleArticle(id, dispatch)

   const getSingleQuizz = (id) => action.quizzesActions.getSingleQuizz(id, dispatch)

   const store = useMemo(
      () => ({
         state,
         saveNewCard,
         createCardsAtOnce,
         updateCard,
         nextRandomCard,
         deleteCurrentCard,
         resetDynamicCards,
         setUiTheme,
         googleLoginSuccess,
         getArticlesList,
         setSelectedArticle,
         setSelectedWord,
         resetTranslation,
         getSingleArticle,
         getSingleQuizz
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
