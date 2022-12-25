// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore, writeBatch } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
   apiKey: import.meta.env.VITE_APIKEY,
   authDomain: import.meta.env.VITE_AUTHDOMAIN,
   projectId: import.meta.env.VITE_PROJECTID,
   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
   appId: import.meta.env.VITE_APPID
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

// Initialize Batch
// see documentation: https://firebase.google.com/docs/firestore/manage-data/transactions#web-version-9
// This stackoverflow makes it easier to get: https://stackoverflow.com/questions/61060313/how-to-do-batched-writes-as-part-of-a-transaction
export const batch = writeBatch(db)
