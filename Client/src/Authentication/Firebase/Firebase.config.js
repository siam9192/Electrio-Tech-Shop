// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDAJSTDuUYmvJsyYxzEQGrA8cKZWFD2yjU",

  authDomain: "electio-a3623.firebaseapp.com",

  projectId: "electio-a3623",

  storageBucket: "electio-a3623.appspot.com",

  messagingSenderId: "869041183426",

  appId: "1:869041183426:web:067dacee6d6c0f895eb95b"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth