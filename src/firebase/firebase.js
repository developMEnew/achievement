// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQyJHuwH0SFzYOUXqcuQGkQL-bz4cOTOE",
  authDomain: "achievement-311cd.firebaseapp.com",
  projectId: "achievement-311cd",
  storageBucket: "achievement-311cd.firebasestorage.app",
  messagingSenderId: "892542534206",
  appId: "1:892542534206:web:e05f3689a952923702c76f",
  measurementId: "G-60G5T56TW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();