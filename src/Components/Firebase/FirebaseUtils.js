import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgziCC0w9cAPguTcI2Fj-R2Mrh1pw641Q",
  authDomain: "footy-shirts-ecommerce.firebaseapp.com",
  projectId: "footy-shirts-ecommerce",
  storageBucket: "footy-shirts-ecommerce.appspot.com",
  messagingSenderId: "266259865065",
  appId: "1:266259865065:web:9c4d65b04114bb6da67f78",
  measurementId: "G-4N0M0Y9Q6J",
};

initializeApp(firebaseConfig);

const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: "select_account" });

export const firebaseAuth = getAuth();
export const fireStore = getFirestore();
export const signInWithGoogle = () => {
  return signInWithPopup(firebaseAuth, googleAuthProvider);
};
