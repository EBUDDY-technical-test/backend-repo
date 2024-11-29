"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_routes_1 = __importDefault(require("@routes/user-routes"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const logger_middleware_1 = require("@middleware/logger-middleware");
const functions_1 = require("firebase/functions");
const firebaseConfig_1 = require("@config/firebaseConfig");
const auth_middleware_1 = require("@middleware/auth-middleware");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// MIDDLEWARES
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use((0, cookie_parser_1.default)());
app.use(logger_middleware_1.loggerMiddleware);
app.use(auth_middleware_1.authMiddleware);
// ROUTES
// NOTES: I just follow the requirement in the docs. 
// for better and understandable routes, it should be '/users' or '/user'.
app.use('/', user_routes_1.default);
(0, functions_1.connectFunctionsEmulator)(firebaseConfig_1.firebaseFunctions, "127.0.0.1", 5001);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
