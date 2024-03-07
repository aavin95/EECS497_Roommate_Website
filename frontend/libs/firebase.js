// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
  appId: "1:301182678531:web:cae4baca6eb25cc8a34036",
  measurementId: "G-H7MRGE7J12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);