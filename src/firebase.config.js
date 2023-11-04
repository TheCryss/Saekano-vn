import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDXEM5VehVq-_4LITXVnAAZCP1xYAEyTmc",
    authDomain: "saekano-7f54b.firebaseapp.com",
    projectId: "saekano-7f54b",
    storageBucket: "saekano-7f54b.appspot.com",
    messagingSenderId: "414290666454",
    appId: "1:414290666454:web:b9967aaab6af47b02afa77",
    measurementId: "G-NR06Y1LPP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };