
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBPQtNCJQZfLsrhPOPZSVucz6BHw4b0vXo",
  authDomain: "svelte-brave.firebaseapp.com",
  projectId: "svelte-brave",
  storageBucket: "svelte-brave.appspot.com",
  messagingSenderId: "930636723462",
  appId: "1:930636723462:web:cdcaf0fb1d2a5396759a87"
};

 const firebaseApp= initializeApp(firebaseConfig);
 export const db = getFirestore(firebaseApp)