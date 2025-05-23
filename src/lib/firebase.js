import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbUY-x2tKs-2I8qagcwHKb5qwqFbwCtks",
  authDomain: "my-chat-app-fc464.firebaseapp.com",
  databaseURL: "https://my-chat-app-fc464-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-chat-app-fc464",
  storageBucket: "my-chat-app-fc464.firebasestorage.app",
  messagingSenderId: "701333049773",
  appId: "1:701333049773:web:5ea27371dceacc92f01124",
  measurementId: "G-96MXDC31LM"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()