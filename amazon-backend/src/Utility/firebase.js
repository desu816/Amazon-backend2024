// src/Utility/firebase.js

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZNH-Bh4omKMHhany2YVh4K7w28jQbt6w",
  authDomain: "clone-34143.firebaseapp.com",
  projectId: "clone-34143",
  storageBucket: "clone-34143.appspot.com", // Updated to match the correct syntax for storageBucket
  messagingSenderId: "691932265803",
  appId: "1:691932265803:web:ba041a9bf87963ab807cce"
};

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);

// Export auth and db instances
// export const auth = getAuth(app);
// export const db = app.firestore();

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Services
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };