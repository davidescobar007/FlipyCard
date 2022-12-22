import {
   deleteDocument,
   setDocument,
   setManyAtSameTime,
   updateDocument
} from "../../services"
import {
   createDynamicArrayOfCards,
   creteDinamicObject,
   getRandomFromArray,
   updateObjInsideOfArray
} from "../../utils"
import { types } from "../global.reducer"
import { constants } from "../global.types"

export const createCard = async (state, dispatch, collection, cardData) => {
   await setDocument(collection, cardData)
   dispatch(cardActionTypes.setCards([...state.cards, cardData]))
}

export const createCardsAtOnce = async (state, cardList, collection) => {
   if (state.categorySelected.length && state.selectedSection) {
      const processedData = createDynamicArrayOfCards(
         cardList,
         state.selectedSection,
         creteDinamicObject(state.categorySelected)
      )
      await setManyAtSameTime(processedData, collection)
   } else {
      alert("Please select at least one category")
   }
}

export const setNextRandomCard = (state, dispatch, cardToBeDeleted) => {
   let { dynamicCards } = state
   dynamicCards = dynamicCards.filter(
      (card) => card.frontTerm !== cardToBeDeleted.frontTerm
   )
   setRandomCard(dispatch, dynamicCards)
   dispatch(cardActionTypes.setDynamicCards(dynamicCards))
}

export const setRandomCard = (dispatch, listOfCards) => {
   const { random } = getRandomFromArray(listOfCards)
   dispatch(cardActionTypes.setRandomCard(random))
}

export const updateRandomCard = (dispatch, cardData) => {
   updateDocument(constants.CARDS, cardData.id, cardData)
   dispatch(cardActionTypes.setRandomCard(cardData))
}

export const updateCard = (state, dispatch, cardData) => {
   const newArrayofDynamicCards = updateObjInsideOfArray(
      state.dynamicCards,
      cardData
   )
   const newArrayOfCards = updateObjInsideOfArray(state.cards, cardData)
   updateDocument(constants.CARDS, cardData.id, cardData)
   dispatch(cardActionTypes.setCards(newArrayOfCards))
   dispatch(cardActionTypes.setDynamicCards(newArrayofDynamicCards))
   dispatch(cardActionTypes.setRandomCard(cardData))
}

export const deleteCard = (state, dispatch) => {
   deleteDocument(constants.CARDS, state.randomCard.id)
   dispatch(cardActionTypes.deleteCard())
   setNextRandomCard(state, dispatch, state.randomCard)
}

export const cardActionTypes = {
   createCard: (payload) => ({
      type: types.CREATE_CARD,
      payload
   }),
   setCards: (payload) => ({
      type: types.SET_CARDS,
      payload
   }),
   setDynamicCards: (payload) => ({
      type: types.SET_DYNAMICCARDS,
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
   deleteCard: () => ({
      type: types.DELETE_CARD
   }),
   error: () => ({
      type: types.SERVICE_ERROR
   })
}
