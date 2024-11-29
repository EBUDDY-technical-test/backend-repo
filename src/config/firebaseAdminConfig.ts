import { credential } from "firebase-admin";
import {initializeApp} from "firebase-admin/app";
import {getAuth} from "firebase-admin/auth";
import { initializeFirestore } from "firebase-admin/firestore";

const serviceAccount = require('./firebase-service-account.json')

const app = initializeApp({
  credential: credential.cert(serviceAccount)
});
export const adminFirestore = initializeFirestore(app);
export const adminAuth = getAuth(app);
