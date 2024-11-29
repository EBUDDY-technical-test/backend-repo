"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseFirestore = exports.firebaseFunctions = exports.firebaseApp = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("firebase/app");
const functions_1 = require("firebase/functions");
const firestore_1 = require("firebase/firestore");
dotenv_1.default.config();
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_ADMIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
};
exports.firebaseApp = (0, app_1.initializeApp)(firebaseConfig);
exports.firebaseFunctions = (0, functions_1.getFunctions)(exports.firebaseApp);
exports.firebaseFirestore = (0, firestore_1.getFirestore)(exports.firebaseApp);
