// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy3BucVEJlXg6N2Alx_VYuzQHpklg7XAE",
  authDomain: "film-app-remake.firebaseapp.com",
  projectId: "film-app-remake",
  storageBucket: "film-app-remake.appspot.com",
  messagingSenderId: "1061359179537",
  appId: "1:1061359179537:web:b230a6cd6c6b4bc3d71eb0",
  measurementId: "G-CH185Z22ZH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//authentication
const auth = getAuth(app);

//database
const db = getFirestore(app);
const storage = getStorage(app);


export { app, analytics, db, storage, auth };
