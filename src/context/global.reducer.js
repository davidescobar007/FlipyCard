import { types } from "./global.types"

const initialStore = {
   cards: [],
   randomCard: null,
   dynamicCards: [],
   articles: [],
   selectedArticle: {},
   selectedWord: "",
   selectedWordTranslation: {},
   isMenuOpen: false,
   theme: "mytheme",
   isDarkTheme: false
}

const globalReducer = (state, action) => {
   switch (action.type) {
      case types.SET_CARDS:
         return {
            ...state,
            cards: action.payload
         }
      case types.SET_DYNAMICCARDS:
         return {
            ...state,
            dynamicCards: action.payload
         }
      case types.CREATE_CARD:
         return {
            ...state,
            cards: [...state.cards, action.payload]
         }
      case types.SET_RANDOM_CARD:
         return {
            ...state,
            randomCard: action.payload
         }
      case types.UPDATE_CARDS:
         return {
            ...state,
            cards: action.payload
         }
      case types.UPDATE_RANDOM_CARD:
         return {
            ...state,
            randomCard: action.payload
         }
      case types.DELETE_CARD:
         return {
            ...state,
            randomCard: initialStore.randomCard
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
            selectedWord: initialStore.selectedWord,
            selectedWordTranslation: initialStore.selectedWordTranslation
         }
      }
      default:
         return state
   }
}

export { initialStore, types }
export default globalReducer
