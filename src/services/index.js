import { app } from "./setup";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  query,
  where,
} from "firebase/firestore/lite";
import { v4 as uuidv4 } from "uuid";
import { async } from "@firebase/util";

const db = getFirestore(app);

export const getCollectionList = async (collectionParam) => {
  const newCollection = collection(db, collectionParam);
  const collectionSnapshot = await getDocs(newCollection);
  const collectionList = collectionSnapshot.docs.map((doc) => {
    return {
      data: doc.data(),
      id: doc.id,
    };
  });
  return collectionList;
};

export const setDocument = async (collection, docData) =>
  await setDoc(doc(db, collection, uuidv4()), docData);

export const updateDocument = async (collection, id, docData) => {
  await updateDoc(doc(db, collection, id), docData);
};

export const getDataByQuery = async (collectionParam, field, param) => {
  const citiesRef = collection(db, collectionParam);

  const q = query(citiesRef, where(field, "==", param));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.data());
};
