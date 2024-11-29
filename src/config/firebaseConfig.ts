import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBWr0tQ1vDPtjEDZCEG5RSazjUPndgTNO0",
  authDomain: "ebuddy-backend-b531c.firebaseapp.com",
  databaseURL: "https://ebuddy-backend-b531c-default-rtdb.firebaseio.com",
  projectId: "ebuddy-backend-b531c",
  storageBucket: "ebuddy-backend-b531c.firebasestorage.app",
  messagingSenderId: "985670993721",
  appId: "1:985670993721:web:c9ff243f0a0d5c6af58ae8",
  measurementId: "G-84RV662E9G",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseFunctions = getFunctions(firebaseApp);
export const firebaseFirestore = getFirestore(firebaseApp);