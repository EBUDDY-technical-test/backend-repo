"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminAuth = exports.adminFirestore = void 0;
const firebase_admin_1 = require("firebase-admin");
const app_1 = require("firebase-admin/app");
const auth_1 = require("firebase-admin/auth");
const firestore_1 = require("firebase-admin/firestore");
const serviceAccount = require('./firebase-service-account.json');
const app = (0, app_1.initializeApp)({
    credential: firebase_admin_1.credential.cert(serviceAccount)
});
exports.adminFirestore = (0, firestore_1.initializeFirestore)(app);
exports.adminAuth = (0, auth_1.getAuth)(app);
