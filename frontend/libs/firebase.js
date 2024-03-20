// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKbXfVJNoj_D2UCWLmymTYa-KdTL-0-n0",
  authDomain: "eecs497roommatewebsite.firebaseapp.com",
  projectId: "eecs497roommatewebsite",
  storageBucket: "eecs497roommatewebsite.appspot.com",
  messagingSenderId: "301182678531",
  appId: "1:301182678531:web:c6868c06aa509757a34036",
  measurementId: "G-JZ5M7J4CPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// const googleAuthProvider = new GoogleAuthProvider();


// Export the auth and googleAuthProvider for use in other parts of your application
// export { auth, googleAuthProvider, signInWithPopup };