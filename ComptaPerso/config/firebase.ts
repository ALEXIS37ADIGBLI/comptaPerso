import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDIGWF-h9-geAk34_k2BEp74z_OugAhZPo",
  authDomain: "compta-perso-c77e6.firebaseapp.com",
  projectId: "compta-perso-c77e6",
  storageBucket: "compta-perso-c77e6.appspot.com",
  messagingSenderId: "234319412893",
  appId: "1:234319412893:web:4b7cfbc347070311571e74"
};

// Initialiser Firebase App
const app = initializeApp(firebaseConfig);

// Initialiser Auth avec AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Initialiser Firestore
const firestore = getFirestore(app);

export { auth, firestore };