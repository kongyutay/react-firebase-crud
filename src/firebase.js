// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "react-admin-panel-f0ac3.firebaseapp.com",
  projectId: "react-admin-panel-f0ac3",
  storageBucket: "react-admin-panel-f0ac3.appspot.com",
  messagingSenderId: "474864362836",
  appId: "1:474864362836:web:0eb13c16a316c31f7614c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();