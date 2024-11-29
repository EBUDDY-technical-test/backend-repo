"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMiddleware = void 0;
const loggerMiddleware = (req, res, next) => {
    try {
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
        next();
    }
    catch (e) {
        throw e;
    }
};
exports.loggerMiddleware = loggerMiddleware;
