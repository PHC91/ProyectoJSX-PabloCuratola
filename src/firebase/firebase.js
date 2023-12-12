// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyCPuiEcHhvUZKN9rg0D0OvqIhr-9LgR2I8",
  authDomain: "curatolajsx.firebaseapp.com",
  projectId: "curatolajsx",
  storageBucket: "curatolajsx.appspot.com",
  messagingSenderId: "575019065436",
  appId: "1:575019065436:web:aa64d90b9034dfbb9a4699",
  measurementId: "G-R6DLC8T706"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app)