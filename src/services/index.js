/* eslint-disable no-useless-catch */

import { queryOperators } from "../context/global.types"

import { aiModel, pb } from "./setup"

export const pbGetList = async (collection, options) => {
   const records = await pb.collection(collection).getFullList(200, options)
   return records
}

export const pbGetSingleRecord = async (collection, recordId, expand = null) => {
   const records = await pb.collection(collection).getOne(recordId, {
      expand: expand
   })
   return records
}

export const pbGetSingleRecordQuery = async ({
   collection,
   field,
   operator = queryOperators.EQUAL_TO,
   param,
   ...rest
}) => {
   const records = await pb.collection(collection).getFirstListItem(`${field} ${operator} "${param}"`, { ...rest })
   return records
}

export const pbCreateRecord = async (collection, data) =>
   await pb.collection(collection).create(data, { $autoCancel: false })

export const pbDeleteRecord = async (collection, id) => {
   await pb.collection(collection).delete(id)
}

export const pbUpdateRecord = async (collection, recordID, data) => {
   const recordResult = await pb.collection(collection).update(recordID, data)
   return recordResult
}

export const fetchData = async (method, url, body = null, headers = {}) => {
   try {
      const options = {
         method: method,
         headers: {
            "Content-Type": "application/json",
            ...headers
         }
      }

      if (body) options.body = JSON.stringify(body)

      const response = await fetch(url, options)
      const data = await response

      if (!response.ok) return new Error(data || "Something went wrong")

      return data
   } catch (error) {
      throw error
   }
}

export const aiModelRequest = async ({ content }) => {
   const response = await aiModel.chat.completions.create({
      messages: [{ role: "user", content }],
      model: "gpt-3.5-turbo"
   })
   return response
}

export const pbSignUp = async (provider, code, codeVerifier, redirectUrl) => {
   const resultLoginData = await pb.collection("users").authWithOAuth2(provider, code, codeVerifier, redirectUrl)
   return resultLoginData
}

export const pbListAuthMethods = async () => {
   const methods = await pb.collection("users").listAuthMethods()
   return methods
}

export const pbLogOut = () => {
   pb.authStore.clear()
}
