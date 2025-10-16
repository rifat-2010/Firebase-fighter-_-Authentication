// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkWj0xPlvbVEps00TqjpteLUque5AmgFw",
  authDomain: "milestone-09-first-conceptual.firebaseapp.com",
  projectId: "milestone-09-first-conceptual",
  storageBucket: "milestone-09-first-conceptual.firebasestorage.app",
  messagingSenderId: "391173772215",
  appId: "1:391173772215:web:68f9d7d7c23eed9fa7ce32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
