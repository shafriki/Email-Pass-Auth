// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlUB_gMXwG1afh4fE4act7fJDFlWuvDFg",
  authDomain: "emailpass-auth-6de4a.firebaseapp.com",
  projectId: "emailpass-auth-6de4a",
  storageBucket: "emailpass-auth-6de4a.firebasestorage.app",
  messagingSenderId: "580121538287",
  appId: "1:580121538287:web:be70308b03745cfafa351a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;