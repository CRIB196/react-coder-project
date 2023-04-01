// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBgbjv2wW7xoZL3uFMY_pTXyk0fRmBfzPM",
  authDomain: "coder-react-newfirebase.firebaseapp.com",
  projectId: "coder-react-newfirebase",
  storageBucket: "coder-react-newfirebase.appspot.com",
  messagingSenderId: "537019090208",
  appId: "1:537019090208:web:37ac9af63f7c1e0672c345"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
