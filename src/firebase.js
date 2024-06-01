import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_MY_KEY,
  authDomain: "test-update-5a9c2.firebaseapp.com",
  projectId: "test-update-5a9c2",
  storageBucket: "test-update-5a9c2.appspot.com",
  messagingSenderId: "557945186234",
  appId: "1:557945186234:web:a16fbc0332275e48031f83",
  measurementId: "G-9YWD755LG4",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export const storage = getStorage(app);

export { auth, db };
