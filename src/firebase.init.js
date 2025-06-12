// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBreo_avcmIWAwHcynxhmeJzdDSK0gVPkw",
  authDomain: "assignment-11-auth-2e9b8.firebaseapp.com",
  projectId: "assignment-11-auth-2e9b8",
  storageBucket: "assignment-11-auth-2e9b8.firebasestorage.app",
  messagingSenderId: "987584010196",
  appId: "1:987584010196:web:d7cfb041185303b6e92841"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);