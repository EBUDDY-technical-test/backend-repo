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
exports.updateUserData = exports.fetchUserData = void 0;
const https_1 = require("firebase-functions/v2/https");
const config_1 = require("./config");
exports.fetchUserData = (0, https_1.onCall)(() => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield config_1.db.collection("USERS").get();
    return data.docs.map((i) => i.data());
}));
exports.updateUserData = (0, https_1.onCall)((req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.db
        .collection("USERS")
        .doc(req.data.id)
        .update(req.data);
    return result;
}));
