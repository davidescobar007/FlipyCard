import { pb } from "./setup"

export const pbGetList = async (collection, filter = null) => {
   const records = await pb.collection(collection).getFullList(200, { filter })
   return records
}

export const pbGetDataByQuery = async (
   { collection, page, perPage },
   { field, param }
) => {
   const records = await pb.collection(collection).getList(page, perPage, {
      filter: `${field} = "${param}"`
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
