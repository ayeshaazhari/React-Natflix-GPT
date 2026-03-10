// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8zGfR4e27aHVGMp7uJeJDRARQV9MLDuc",
  authDomain: "netflixreactgpt.firebaseapp.com",
  projectId: "netflixreactgpt",
  storageBucket: "netflixreactgpt.firebasestorage.app",
  messagingSenderId: "1041057262655",
  appId: "1:1041057262655:web:c55389012066f05f8c1c8a",
  measurementId: "G-CH89288415",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
