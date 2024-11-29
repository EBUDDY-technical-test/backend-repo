"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebaseConfig_1 = require("@config/firebaseConfig");
const functions_1 = require("firebase/functions");
const getUser = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userList = yield (0, functions_1.httpsCallable)(firebaseConfig_1.firebaseFunctions, 'fetchUserData')();
        res.send(userList.data);
    }
    catch (e) {
        throw e;
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, functions_1.httpsCallable)(firebaseConfig_1.firebaseFunctions, 'updateUserData')(req.body);
        res.send(result.data);
    }
    catch (e) {
        throw e;
    }
});
const userController = {};
exports.default = Object.assign(userController, {
    getUser,
    updateUser,
});
