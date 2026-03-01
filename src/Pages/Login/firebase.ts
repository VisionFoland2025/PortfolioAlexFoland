import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWvWgOGU0n_S4M7DiDHQY10ZmJibZXpuw",
  authDomain: "profile-5b7ec.firebaseapp.com",
  projectId: "profile-5b7ec",
  storageBucket: "profile-5b7ec.firebasestorage.app",
  messagingSenderId: "856308871923",
  appId: "1:856308871923:web:9451552156107a3813fd86",
  measurementId: "G-WL9DWYL5GJ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
