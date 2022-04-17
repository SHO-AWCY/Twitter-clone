// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKtc6U0ZtY_qhdmdkvWMwECZXehKncP3I",
  authDomain: "twitter-clone-baa84.firebaseapp.com",
  projectId: "twitter-clone-baa84",
  storageBucket: "twitter-clone-baa84.appspot.com",
  messagingSenderId: "560553274299",
  appId: "1:560553274299:web:58763b45fdb5db467ef29e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
