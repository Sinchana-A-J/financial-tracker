// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3uA1q3VLqROfTcCM7IUpc9BmKMWmt0AE",
  authDomain: "financial-tracker-6399b.firebaseapp.com",
  projectId: "financial-tracker-6399b",
  storageBucket: "financial-tracker-6399b.appspot.com",
  messagingSenderId: "1052341193027",
  appId: "1:1052341193027:web:b7dec58a8043cfbeedc7f6",
  measurementId: "G-7P0P30PBXF"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

export { auth, db };