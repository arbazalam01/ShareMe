// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf5huJ8coFgNHVGMSHvDJ8vIQOXHVUV-E",
  authDomain: "shareme-a2723.firebaseapp.com",
  projectId: "shareme-a2723",
  storageBucket: "shareme-a2723.appspot.com",
  messagingSenderId: "245113733354",
  appId: "1:245113733354:web:e3b691e5333c6e9bd65793",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApps();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
