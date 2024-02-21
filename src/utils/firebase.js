// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg6cba5VnAmsKZskHs-reEUxY8nhOZTLY",
  authDomain: "netflixgpt-7e497.firebaseapp.com",
  projectId: "netflixgpt-7e497",
  storageBucket: "netflixgpt-7e497.appspot.com",
  messagingSenderId: "848991801824",
  appId: "1:848991801824:web:49d764261afe8c7da09b85",
  measurementId: "G-QRH6XGT65L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();