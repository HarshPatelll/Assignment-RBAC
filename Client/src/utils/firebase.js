// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-82ebb.firebaseapp.com",
  projectId: "taskmanager-82ebb",
  storageBucket: "taskmanager-82ebb.appspot.com",
  messagingSenderId: "332620460169",
  appId: "1:332620460169:web:4ae6a172c5acd8ec579658",
  measurementId: "G-XKT3KT393T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export{app,analytics};