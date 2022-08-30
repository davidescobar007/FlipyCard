import { types } from "./global.types"

const initialStore = {
   categories: [],
   categorySelected: [],
   categoryId: null,
   cards: [],
   randomCard: null
}

const globalReducer = (state, action) => {
   switch (action.type) {
      case types.SET_CARDS:
         return {
            ...state,
            cards: action.payload
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
         return { ...state, randomCard: initialStore.randomCard } //to be defined
      case types.SET_CATEGORIES:
         return {
            ...state,
            categories: action.payload
         }
      case types.CREATE_CATEGORY:
         return {
            ...state,
            categories: [...state.categories, action.payload]
         }
      case types.CATEGORY_SELECTED:
         return {
            ...state,
            categorySelected: action.payload
         }
      case types.CATEGORY_ID:
         return {
            ...state,
            categoryId: action.payload
         }
      default:
         return state
   }
}

export { initialStore, types }
export default globalReducer
