// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN7w7e2fLw4WWGPMAgVx2laYSLZ-2yV1A",
  authDomain: "luxe-living-8bd7a.firebaseapp.com",
  projectId: "luxe-living-8bd7a",
  storageBucket: "luxe-living-8bd7a.appspot.com",
  messagingSenderId: "458878799810",
  appId: "1:458878799810:web:ab97f53449d4efbe32d05b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth