import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDH46a9tnhHxnyTEGC1ERFbnLgqes0-bd4",
  authDomain: "my-task-693ae.firebaseapp.com",
  projectId: "my-task-693ae",
  storageBucket: "my-task-693ae.appspot.com",
  messagingSenderId: "1011717230776",
  appId: "1:1011717230776:web:346d75145d7149f72a644d"
};

// app => objeto com todas as configurações do firebase
export const app = initializeApp(firebaseConfig);
// auth => objeto com as configurações do authentication
export const auth = getAuth(app)
// db => objeto com as configurações do Firestore
export const db = getFirestore(app)
