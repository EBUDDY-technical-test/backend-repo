"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = __importDefault(require("@controller/user-controller"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/fetch-user-data', user_controller_1.default.getUser);
router.put('/update-user-data', user_controller_1.default.updateUser);
exports.default = router;
