import { pbCreateRecord, pbDeleteRecord, pbUpdateRecord } from "../../services"
import { createDynamicArrayOfCards, getRandomFromArray, updateObjInsideOfArray } from "../../utils"
import { types } from "../global.reducer"
import { constants } from "../global.types"

export const createCard = async (state, dispatch, collection, cardData) => {
   await pbCreateRecord(collection, cardData)
   dispatch(cardActionTypes.setCards([...state.cards, cardData]))
}

export const createCardsAtOnce = async (state, cardList) => {
   if (state.categorySelected.length && state.selectedSection) {
      const processedData = createDynamicArrayOfCards(
         cardList,
         state.categorySelected.map(({ id }) => id)
      )
      const promises = processedData.map((record) => {
         return pbCreateRecord(constants.CARDS, record)
      })
      Promise.all(promises)
   } else {
      alert("Please select at least one category")
   }
}

export const setNextRandomCard = (state, dispatch, cardToBeDeleted) => {
   let { dynamicCards } = state
   dynamicCards = dynamicCards.filter((card) => card.id !== cardToBeDeleted.id)
   setRandomCard(dispatch, dynamicCards)
   dispatch(cardActionTypes.setDynamicCards(dynamicCards))
}

export const setRandomCard = (dispatch, listOfCards) => {
   const { random } = getRandomFromArray(listOfCards)
   dispatch(cardActionTypes.setRandomCard(random))
}

export const updateRandomCard = (dispatch, cardData) => {
   pbUpdateRecord(constants.CARDS, cardData.id, cardData)
   dispatch(cardActionTypes.setRandomCard(cardData))
}

export const updateCard = (state, dispatch, cardData) => {
   const newArrayofDynamicCards = updateObjInsideOfArray(state.dynamicCards, cardData)
   const newArrayOfCards = updateObjInsideOfArray(state.cards, cardData)
   pbUpdateRecord(constants.CARDS, cardData.id, cardData)
   dispatch(cardActionTypes.setCards(newArrayOfCards))
   dispatch(cardActionTypes.setDynamicCards(newArrayofDynamicCards))
   dispatch(cardActionTypes.setRandomCard(cardData))
}

export const deleteCard = (state, dispatch) => {
   pbDeleteRecord(constants.CARDS, state.randomCard.id)
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
