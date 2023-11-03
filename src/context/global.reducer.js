import { types } from "./global.types"

const initialStore = {
   authMethods: [],
   user: null,
   scoreList: [],
   cards: [],
   articles: [],
   selectedArticle: {},
   selectedWord: "",
   selectedWordTranslation: {},
   quizz: [],
   isMenuOpen: false,
   theme: "mytheme",
   isDarkTheme: false,
   isLoading: {
      wordTranslation: false,
      articleList: false,
      article: false,
      cards: false
   }
}

const globalReducer = (state, action) => {
   switch (action.type) {
      case types.SET_AUTH_METHODS:
         return {
            ...state,
            authMethods: action.payload
         }
      case types.SET_USER:
         return {
            ...state,
            user: action.payload
         }
      case types.SET_CARDS:
         return {
            ...state,
            cards: action.payload
         }
      case types.IS_MENU_OPEN:
         return {
            ...state,
            isMenuOpen: !state.isMenuOpen
         }
      case types.SET_THEME: {
         return {
            ...state,
            isDarkTheme: !state.isDarkTheme
         }
      }
      case types.SET_ARTICLES: {
         return {
            ...state,
            articles: action.payload
         }
      }
      case types.SET_SELECTED_ARTICLE: {
         return {
            ...state,
            selectedArticle: action.payload
         }
      }
      case types.SET_SELECTED_WORD: {
         return {
            ...state,
            selectedWord: action.payload
         }
      }
      case types.UPDATE_TRANSLATION: {
         return {
            ...state,
            selectedWordTranslation: action?.payload || {}
         }
      }
      case types.SET_QUIZZ: {
         return {
            ...state,
            quizz: action.payload
         }
      }
      case types.SERVICE_ERROR: {
         return {
            ...state,
            errorModalText: action.payload
         }
      }
      case types.SET_SCORE_LIST: {
         return {
            ...state,
            scoreList: action.payload
         }
      }
      case types.LOADING_WORD_TRANSLATION: {
         return {
            ...state,
            isLoading: {
               ...state.isLoading,
               wordTranslation: action.payload
            }
         }
      }
      default:
         return state
   }
}

export { initialStore, types }
export default globalReducer
