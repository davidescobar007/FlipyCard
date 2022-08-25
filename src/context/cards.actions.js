import { deleteDocument, setDocument, updateDocument } from "../services"
import { getRandomFromArray } from "../utils"
import { types } from "./global.reducer"
import { constants } from "./global.types"

export const createCard = async (state, dispatch, collection, cardData) => {
   await setDocument(collection, cardData)
   dispatch(cardActions.setCards([...state.cards, cardData]))
}

export const setNextRandomCard = (state, dispatch, cardToBeDeleted) => {
   let { cards } = state
   cards = cards.filter(
      (card) => card.frontReference !== cardToBeDeleted.frontReference
   )
   setRandomCard(dispatch, cards)
   dispatch(cardActions.setCards(cards))
}

export const setRandomCard = (dispatch, listOfCards) => {
   const { random } = getRandomFromArray(listOfCards)
   dispatch(cardActions.setRandomCard(random))
}

export const updateRandomCard = (dispatch, cardData) => {
   updateDocument(constants.CARDS, cardData.id, cardData)
   dispatch(cardActions.setRandomCard(cardData))
}

export const deleteCard = (state, dispatch) => {
   deleteDocument(constants.CARDS, state.randomCard.id)
   dispatch(cardActions.deleteCard(null))
   setNextRandomCard(state, dispatch, state.randomCard)
}

export const cardActions = {
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
   }),
   updateRandomCard: (payload) => ({
      type: types.UPDATE_RANDOM_CARD,
      payload
   }),
   deleteCard: (payload) => ({
      type: types.DELETE_CARD,
      payload
   }),
   error: () => ({
      type: types.SERVICE_ERROR
   })
}
