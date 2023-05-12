// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv_qyxj459U785o9Mp6E6eILNkYq522Nc",
  authDomain: "car-doctor-b4de1.firebaseapp.com",
  projectId: "car-doctor-b4de1",
  storageBucket: "car-doctor-b4de1.appspot.com",
  messagingSenderId: "184757162411",
  appId: "1:184757162411:web:512cdf06b03ce0298342ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;