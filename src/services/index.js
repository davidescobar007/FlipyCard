import { app } from "./setup"
import {
   getFirestore,
   collection,
   getDocs,
   setDoc,
   doc,
   updateDoc,
   query,
   where,
   deleteDoc
} from "firebase/firestore/lite"
import { v4 as uuidv4 } from "uuid"

const db = getFirestore(app)

export const getCollectionList = async (collectionParam) => {
   const newCollection = collection(db, collectionParam)
   const collectionSnapshot = await getDocs(newCollection)
   const collectionList = collectionSnapshot.docs.map((doc) => {
      return {
         data: doc.data(),
         id: doc.id
      }
   })
   return collectionList
}

export const getCollectionListByArray = async (
   collectionParam,
   field,
   arrayParams
) => {
   const reference = collection(db, collectionParam)
   const q = query(reference, where(field, "array-contains-any", arrayParams))
   const querySnapshot = await getDocs(q)
   let processedData = querySnapshot.docs.map((doc) => {
      let data = doc.data()
      data.id = doc.id
      return data
   })
   return processedData
}

export const setDocument = async (collection, docData) =>
   await setDoc(doc(db, collection, uuidv4()), docData)

export const updateDocument = async (collection, id, docData) => {
   await updateDoc(doc(db, collection, id), docData)
}

export const getDataByQuery = async (collectionParam, field, param) => {
   const reference = collection(db, collectionParam)
   const q = query(reference, where(field, "==", param))
   const querySnapshot = await getDocs(q)
   return querySnapshot.docs.map((doc) => doc.data())
}

export const deleteDocument = async (collectionParam, id) => {
   await deleteDoc(doc(db, collectionParam, id))
}

export const dynamicSearch = async (collectionParam, queryList) => {
   const reference = collection(db, collectionParam)
   const queryConditions = queryList.map((condition) =>
      where(condition.field, condition.operator, condition.value)
   )
   const queryToExecute = query(reference, ...queryConditions)
   const querySnapshot = await getDocs(queryToExecute)
   let processedData = querySnapshot.docs.map((doc) => {
      let data = doc.data()
      data.id = doc.id
      return data
   })
   return processedData
}
