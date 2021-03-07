"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = async (req, res, next) => {
    const authorization = req.get('Authorization');
    if (!authorization) {
        req.isAuth = false;
        return next();
    }
    const token = authorization.split(' ')[1];
    if (!token) {
        req.isAuth = false;
        return next();
    }
    let decodedToken;
    try {
        decodedToken = jsonwebtoken_1.default.verify(token, 'supersecret');
    }
    catch (err) {
        req.isAuth = false;
        return next();
    }
    if (!decodedToken) {
        req.isAuth = false;
        return next();
    }
    req.isAuth = true;
    req.userId = decodedToken.userId;
    return next();
};
exports.authMiddleware = authMiddleware;
