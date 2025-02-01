// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqd1Wa0SiSf7TZ9_qCi141DlJC6xzWvTU",
  authDomain: "netflixgpt-c8251.firebaseapp.com",
  projectId: "netflixgpt-c8251",
  storageBucket: "netflixgpt-c8251.firebasestorage.app",
  messagingSenderId: "739879275184",
  appId: "1:739879275184:web:4eda3a38e8f89070a08975",
  measurementId: "G-XMKWDEPC4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);