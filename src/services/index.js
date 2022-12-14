import { db, batch } from "./setup"
import {
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

export const getCollectionList = async (collectionName) => {
   const newCollection = collection(db, collectionName)
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
   collectionName,
   field,
   arrayParams
) => {
   const reference = collection(db, collectionName)
   const q = query(reference, where(field, "array-contains-any", arrayParams))
   const querySnapshot = await getDocs(q)
   let processedData = querySnapshot.docs.map((doc) => {
      let data = doc.data()
      data.id = doc.id
      return data
   })
   return processedData
}

export const setDocument = async (collection, docData) => {
   try {
      await setDoc(doc(db, collection, uuidv4()), docData)
   } catch (error) {
      throw new Error(error)
   }
}

export const updateDocument = async (collection, id, docData) => {
   try {
      await updateDoc(doc(db, collection, id), docData)
   } catch (error) {
      throw new Error(error)
   }
}

export const getDataByQuery = async (collectionName, field, param) => {
   const reference = collection(db, collectionName)
   const queryToExecute = query(reference, where(field, "==", param))
   const querySnapshot = await getDocs(queryToExecute)
   let processedData = querySnapshot.docs.map((doc) => {
      let data = doc.data()
      data.id = doc.id
      return data
   })
   return processedData
}

export const deleteDocument = async (collectionName, id) => {
   await deleteDoc(doc(db, collectionName, id))
}

export const dynamicSearch = async (collectionName, queryList) => {
   const reference = collection(db, collectionName)
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

export const setManyAtSameTime = async (array, collection) => {
   if (array.length < 400) {
      array.forEach((element) => {
         batch.set(doc(db, collection, uuidv4()), element)
      })
      await batch.commit()
   } else {
      alert("The number of items must be less than 400")
   }
}
