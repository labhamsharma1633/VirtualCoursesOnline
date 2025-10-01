// Import the functions you need from the SDKs you need
import { autoBatchEnhancer } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginvirtualcourses-fdb1e.firebaseapp.com",
  projectId: "loginvirtualcourses-fdb1e",
  storageBucket: "loginvirtualcourses-fdb1e.firebasestorage.app",
  messagingSenderId: "921295049951",
  appId: "1:921295049951:web:549d9665e418f7872d456a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const provider=new GoogleAuthProvider()

export {auth,provider}