// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBedE_ZL0_JXhZ2THe36hFoUclZyccY1E",
    authDomain: "netflix-6071c.firebaseapp.com",
    projectId: "netflix-6071c",
    storageBucket: "netflix-6071c.appspot.com",
    messagingSenderId: "779938131550",
    appId: "1:779938131550:web:8a69eb0a52f525412b4ecf",
    measurementId: "G-D866FNJQS0"
};

// Initialize Firebase
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }