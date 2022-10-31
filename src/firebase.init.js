// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7-rMOZLAz2Cjstrk22LHWhV8XDUyiVtU",
  authDomain: "mediexpress-4eb94.firebaseapp.com",
  projectId: "mediexpress-4eb94",
  storageBucket: "mediexpress-4eb94.appspot.com",
  messagingSenderId: "792008534685",
  appId: "1:792008534685:web:fb10de5dc9c205f6514274"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;