// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVh2U56enmsXZTKsEFvae_Pm9neZ4WzKk",
  authDomain: "ego-ecommerce.firebaseapp.com",
  projectId: "ego-ecommerce",
  storageBucket: "ego-ecommerce.appspot.com",
  messagingSenderId: "298697245116",
  appId: "1:298697245116:web:5469c1af06f0224da5ebb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth