"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.app = void 0;
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
exports.app = (0, app_1.initializeApp)();
exports.db = (0, firestore_1.initializeFirestore)(exports.app);
