/* eslint-disable no-useless-catch */
import { aiModel, pb } from "./setup"

export const pbGetList = async (collection, filter = null) => {
   const records = await pb.collection(collection).getFullList(200, { filter })
   return records
}

export const pbGetSingleRecord = async ({ collection, page, perPage }, { field, param }) => {
   const records = await pb.collection(collection).getList(page, perPage, {
      filter: `${field} ?~ "${param}"`
   })
   return records
}

export const pbCreateRecord = async (collection, data) =>
   await pb.collection(collection).create(data, { $autoCancel: false })

export const pbDeleteRecord = async (collection, id) => {
   await pb.collection(collection).delete(id)
}

export const pbUpdateRecord = async (collection, recordID, data) =>
   await pb.collection(collection).update(recordID, data)

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
