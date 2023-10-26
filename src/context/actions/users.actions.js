import { pbListAuthMethods, pbLogOut, pbSignUp } from "../../services"
import { types } from "../global.reducer"

import { handleErrorModal } from "./global.actions"

const getLoginMethods = async (dispatch) => {
   const authMethods = await pbListAuthMethods()
   localStorage.setItem("provider", JSON.stringify(authMethods?.authProviders))
   dispatch(actionHandlerTypes.setAuthMethods(authMethods?.authProviders))
}

const updateUserState = (dispatch) => {
   const user = localStorage.getItem("user")
   const pbModel = JSON.parse(localStorage.getItem("pocketbase_auth"))
   if (user) {
      const { meta } = JSON.parse(user)
      const {
         model: { id }
      } = pbModel
      meta.userId = id
      dispatch(actionHandlerTypes.setUser(meta))
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
         localStorage.setItem("user", JSON.stringify(user))
         dispatch(actionHandlerTypes.setUser(user.meta))
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

export { getLoginMethods, googleLogin, logOut, updateUserState }
