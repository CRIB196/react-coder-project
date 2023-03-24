// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5jwsI_8_kEcpnMFsRNk1NR3NyMDk5Sao",
  authDomain: "myprojectreactcoder.firebaseapp.com",
  projectId: "myprojectreactcoder",
  storageBucket: "myprojectreactcoder.appspot.com",
  messagingSenderId: "958377158785",
  appId: "1:958377158785:web:e1f3637d58e49e02e20580",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
