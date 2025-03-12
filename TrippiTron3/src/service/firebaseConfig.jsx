// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLs9AxGzwaRjtnMdziGwC9A7l6RfnXtk4",
  authDomain: "trippitron-51f6f.firebaseapp.com",
  projectId: "trippitron-51f6f",
  storageBucket: "trippitron-51f6f.firebasestorage.app",
  messagingSenderId: "450514535183",
  appId: "1:450514535183:web:d082c42c7e2bfd86c3347a",
  measurementId: "G-E0EX1HY3WW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);