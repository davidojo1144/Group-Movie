import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDu44xVHSe9LOQsYUvN6EUSj_ldJRtAySw",
  authDomain: "react-netflix-clone-cebcf.firebaseapp.com",
  projectId: "react-netflix-clone-cebcf",
  storageBucket: "react-netflix-clone-cebcf.firebasestorage.app",
  messagingSenderId: "360052725983",
  appId: "1:360052725983:web:71171b13652d613400f16a",
  measurementId: "G-B3340PPCZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app)