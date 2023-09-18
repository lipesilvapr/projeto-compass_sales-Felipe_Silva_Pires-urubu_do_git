import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {getReactNativePersistence, initializeAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC-0uRIbmsqVgiskCK3TYFR2omHCoBWD8s",
  authDomain: "compass-sales-database.firebaseapp.com",
  projectId: "compass-sales-database",
  storageBucket: "compass-sales-database.appspot.com",
  messagingSenderId: "1003834899676",
  appId: "1:1003834899676:web:85923b562ef3e72ca98819"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
