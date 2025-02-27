import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCs0_U0YhNz60fXOphl8-cCeG8ghz01MUQ",
  authDomain: "cars-cf263.firebaseapp.com",
  projectId: "cars-cf263",
  storageBucket: "cars-cf263.firebasestorage.app",
  messagingSenderId: "183105839841",
  appId: "1:183105839841:web:459249f73fea0b5f618da0",
  measurementId: "G-6YNTWYCDFE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(); // ✅ Ensure this is exported
export const db = getFirestore(app);