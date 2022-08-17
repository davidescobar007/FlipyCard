// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGVM1GLHKxDNBOVHsjMLsK7Si0QzFmbEs",
  authDomain: "flipycard.firebaseapp.com",
  projectId: "flipycard",
  storageBucket: "flipycard.appspot.com",
  messagingSenderId: "17659616550",
  appId: "1:17659616550:web:d883096d7afddac9a0f5e7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);