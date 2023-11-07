import {
   pbCreateRecord,
   pbGetSingleRecordQuery,
   pbListAuthMethods,
   pbLogOut,
   pbSignUp,
   pbUpdateRecord
} from "../../services"
import { types } from "../global.reducer"
import { constants } from "../global.types"

import { handleErrorModal } from "./global.actions"

const updateUserScore = async (id, newScore) => {
   const params = {
      collection: constants.SCORE,
      field: "user_id",
      param: id
   }
   const userScore = await pbGetSingleRecordQuery(params)
   const currentScore = Number(userScore.score)
   userScore.score = currentScore + Number(newScore)
   await pbUpdateRecord(constants.SCORE, userScore.id, userScore)
}

const getLoginMethods = async (dispatch) => {
   const authMethods = await pbListAuthMethods()
   localStorage.setItem("provider", JSON.stringify(authMethods?.authProviders))
   dispatch(actionHandlerTypes.setAuthMethods(authMethods?.authProviders))
}

const updateUserState = (dispatch) => {
   const pbModel = JSON.parse(localStorage.getItem("pocketbase_auth"))
   try {
      if (pbModel) {
         const { model } = pbModel
         dispatch(actionHandlerTypes.setUser(model))
      }
   } catch (error) {
      handleErrorModal(dispatch, error)
   }
}

const googleLogin = async (dispatch) => {
   const params = new URL(window.location).searchParams
   if (params.get("state")) {
      const redirectUrl = window.location.origin + "/learn"
      const provider = JSON.parse(localStorage.getItem("provider"))
      // if (provider.state !== params.get("state")) {
      //    throw "State parameters don't match."
      // }
      const provName = provider[0].name
      const code = params.get("code")
      const codeVerifier = provider[0].codeVerifier
      try {
         const user = await pbSignUp(provName, code, codeVerifier, redirectUrl)
         user?.record?.id && pbCreateRecord(constants.SCORE, { user_id: user.record.id })
         if (!user.record.avatarUrl && !user.record.name) {
            user.record.avatarUrl = user.meta.avatarUrl
            user.record.name = user.meta.name
            const updatedUSer = await pbUpdateRecord(constants.USERS, user.record.id, user.record)
            dispatch(actionHandlerTypes.setUser(updatedUSer))
            return
         }
         dispatch(actionHandlerTypes.setUser(user.record))
      } catch (error) {
         handleErrorModal(dispatch, error)
      }
   }
}

const logOut = (dispatch) => {
   try {
      pbLogOut()
      localStorage.removeItem("user")
      dispatch(actionHandlerTypes.setUser(null))
   } catch (error) {
      handleErrorModal(dispatch, error)
   }
}

const actionHandlerTypes = {
   setAuthMethods: (payload) => ({
      type: types.SET_AUTH_METHODS,
      payload
   }),
   setUser: (payload) => ({
      type: types.SET_USER,
      payload
   })
}

export { getLoginMethods, googleLogin, logOut, updateUserScore, updateUserState }
