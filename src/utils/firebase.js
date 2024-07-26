import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "netflixgpt-ae85d.firebaseapp.com",
  projectId: "netflixgpt-ae85d",
  storageBucket: "netflixgpt-ae85d.appspot.com",
  messagingSenderId: "716648084462",
  appId: "1:716648084462:web:95d02c2747902690c454ff",
  measurementId: "G-BQGKWY94TM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();