import {
   getCollectionList,
   getDataByQuery,
   setDocument,
   updateDocument
} from "../services"
import { getRandomFromArray } from "../utils/indes"
import { types } from "./global.reducer"

export const createCategory = async (state, dispatch, payload) => {
   const { collection, id, category } = payload
   const { categories } = state
   await updateDocument(collection, id, category)
   !categories.includes(category) &&
      dispatch(actionsHandler.category.setCategory(category))
}

export const getCategories = (dispatch, payload) => {
   try {
      getCollectionList(payload).then((data) => {
         dispatch(
            actionsHandler.category.setCategory(data[0].data.categoryList)
         )
         dispatch(actionsHandler.category.setCategoriesId(data[0].id))
      })
   } catch (error) {
      actionsHandler.error()
   }
}

export const getCardsByCategories = (dispatch, collection, field, criteria) => {
   try {
      getDataByQuery(collection, field, criteria).then((cardsArray) => {
         dispatch(actionsHandler.card.setCards(cardsArray))
         setRandomCard(dispatch, cardsArray)
      })
      dispatch(actionsHandler.category.selectCetegories(criteria))
   } catch (error) {
      actionsHandler.error()
   }
}

export const createCard = async (state, dispatch, collection, cardData) => {
   await setDocument(collection, cardData)
   dispatch(actionsHandler.card.setCards([...state.cards, cardData]))
}

export const setNextRandomCard = (state, dispatch, cardToBeDeleted) => {
   let { cards } = state
   cards = cards.filter(
      (card) => card.frontReference !== cardToBeDeleted.frontReference
   )
   setRandomCard(dispatch, cards)
   dispatch(actionsHandler.card.setCards(cards))
}

const setRandomCard = (dispatch, listOfCards) => {
   const { random } = getRandomFromArray(listOfCards)
   dispatch(actionsHandler.card.setRandomCard(random))
}

export const actionsHandler = {
   category: {
      setCategory: (payload) => ({
         type: types.SET_CATEGORIES,
         payload
      }),
      setCategoriesId: (payload) => ({
         type: types.CATEGORY_ID,
         payload
      }),
      createCategory: (payload) => ({
         type: types.CREATE_CATEGORY,
         payload
      }),
      selectCetegories: (payload) => ({
         type: types.CATEGORY_SELECTED,
         payload
      })
   },
   card: {
      createCard: (payload) => ({
         type: types.CREATE_CARD,
         payload
      }),
      setCards: (payload) => ({
         type: types.SET_CARDS,
         payload
      }),
      setRandomCard: (payload) => ({
         type: types.SET_RANDOM_CARD,
         payload
      })
   },
   error: () => ({
      type: types.SERVICE_ERROR
   })
}

export const { category, card } = actionsHandler
