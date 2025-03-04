import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwMgWQ9PdZrUli2r_7S_Qdup9Acl_LYXY",
  authDomain: "caligate.firebaseapp.com",
  projectId: "caligate",
  storageBucket: "caligate.firebasestorage.app",
  messagingSenderId: "505550599550",
  appId: "1:505550599550:web:f83387c8d67fc2e27d6f2f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
