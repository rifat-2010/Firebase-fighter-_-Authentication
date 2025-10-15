// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK-WW7-Jhou3Py7bQQGaxJPcqFzzNzp8I",
  authDomain: "fir-fighter-650bf.firebaseapp.com",
  projectId: "fir-fighter-650bf",
  storageBucket: "fir-fighter-650bf.firebasestorage.app",
  messagingSenderId: "202252046775",
  appId: "1:202252046775:web:685b87aadbda679d115832",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
