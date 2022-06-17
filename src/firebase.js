// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebase = {
    apiKey: "AIzaSyBCoNjYa87VYoEOJi2SIJeIxFQUMlQFMro",
    authDomain: "react-project-3-e77c9.firebaseapp.com",
    projectId: "react-project-3-e77c9",
    storageBucket: "react-project-3-e77c9.appspot.com",
    messagingSenderId: "178951659784",
    appId: "1:178951659784:web:aa15330e9601a61b038cbd"
};

// Initialize Firebase
const app = initializeApp(firebase);

const database = getDatabase(app);

export default database;