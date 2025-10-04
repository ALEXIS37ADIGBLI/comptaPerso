import { Firestore, getFirestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import {initializeAuth, getReactNativePersistence} from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIGWF-h9-geAk34_k2BEp74z_OugAhZPo",
  authDomain: "compta-perso-c77e6.firebaseapp.com",
  projectId: "compta-perso-c77e6",
  storageBucket: "compta-perso-c77e6.firebasestorage.app",
  messagingSenderId: "234319412893",
  appId: "1:234319412893:web:4b7cfbc347070311571e74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

export const firestore = getFirestore(app);