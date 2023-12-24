// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7UlXhE4ppDmQ1lX2j32SxjHl3Ex2LE7k",
  authDomain: "netflix-gpt-b50df.firebaseapp.com",
  projectId: "netflix-gpt-b50df",
  storageBucket: "netflix-gpt-b50df.appspot.com",
  messagingSenderId: "666940486491",
  appId: "1:666940486491:web:67d394ef8b063d979d207e",
  measurementId: "G-7GQW2NZ3JL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();