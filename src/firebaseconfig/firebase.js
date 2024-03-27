// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQOtlYpr1pBjIHbmJ9zNR9ux67ddvCmJM",
  authDomain: "online-quiz-system-5694b.firebaseapp.com",
  projectId: "online-quiz-system-5694b",
  storageBucket: "online-quiz-system-5694b.appspot.com",
  messagingSenderId: "809008111237",
  appId: "1:809008111237:web:79171f2a5dac03312753ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;