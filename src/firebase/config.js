// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"; 
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp1-4e007.firebaseapp.com",
  projectId: "chatapp1-4e007",
  storageBucket: "chatapp1-4e007.appspot.com",
  messagingSenderId: "889953845708",
  appId: "1:889953845708:web:0accde6521ff7cb0759d69",
  measurementId: "G-GE4GPX5LTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//? firebase kullanıcı yapısının referansını al
export const auth = getAuth(app);

//? google sağlayıcısı kurulumunu yap
export const provider = new  GoogleAuthProvider();


//? veri tabanının referansını alıyoruz
export const db = getFirestore(app);