import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfjOr3YxjndlNtDCtcR_xvidLH4WzLQbo",
  authDomain: "house-marketplace-app-b5bc3.firebaseapp.com",
  projectId: "house-marketplace-app-b5bc3",
  storageBucket: "house-marketplace-app-b5bc3.appspot.com",
  messagingSenderId: "430153498628",
  appId: "1:430153498628:web:9130b513f7f06ea48a7551",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
