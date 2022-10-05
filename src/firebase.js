// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJC3bkFd3EPPsDYEOXiTB45mT0QrVx0bQ",
  authDomain: "verse-65184.firebaseapp.com",
  projectId: "verse-65184",
  storageBucket: "verse-65184.appspot.com",
  messagingSenderId: "750511727410",
  appId: "1:750511727410:web:37b8a5a069508964a8ad2b",
  measurementId: "G-R4HGK5RW6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)