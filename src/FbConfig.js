// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk__tQBk8uywXSGxe2TcS-TAGo9vBC7vk",
  authDomain: "ems-4fcd9.firebaseapp.com",
  databaseURL: "https://ems-4fcd9-default-rtdb.firebaseio.com",
  projectId: "ems-4fcd9",
  storageBucket: "ems-4fcd9.appspot.com",
  messagingSenderId: "983338231579",
  appId: "1:983338231579:web:e13896e43863ed160d95be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth}