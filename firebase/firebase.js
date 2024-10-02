// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCElc6t-VWc604sGrlUJ4ZRpgqXHdQfP-0",
  authDomain: "natual-disaster.firebaseapp.com",
  projectId: "natual-disaster",
  storageBucket: "natual-disaster.appspot.com",
  messagingSenderId: "188995229519",
  appId: "1:188995229519:web:f977a332428b69af4f173a",
  measurementId: "G-3CFGWMT1ED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

export {app,auth};