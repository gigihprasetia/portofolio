// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdeXWYOw9p5-Anb3r7EY4olgNuhQ6gUUU",
  authDomain: "portonextjs.firebaseapp.com",
  projectId: "portonextjs",
  storageBucket: "portonextjs.appspot.com",
  messagingSenderId: "559150462630",
  appId: "1:559150462630:web:18bd1a0c882d1435bda667",
  measurementId: "G-RKPGRXJJE3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
