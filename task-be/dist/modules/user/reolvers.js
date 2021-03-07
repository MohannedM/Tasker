"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userResolvers = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const custom_errors_1 = require("../errors/custom-errors");
const User_1 = require("./User");
const validation_1 = require("./validation");
exports.userResolvers = {
    register: async ({ userData }) => {
        validation_1.registerValidations({ userData });
        const { username, email, password } = userData;
        const usernameExists = await User_1.User.findByCondition({ username });
        if (usernameExists)
            throw new custom_errors_1.CustomError('Username already exists', 400);
        const emailExists = await User_1.User.findByCondition({ email });
        if (emailExists)
            throw new custom_errors_1.CustomError('Email already exists', 400);
        const hashedPassword = await bcryptjs_1.default.hash(password, 12);
        const user = await User_1.User.add({
            username,
            email,
            password: hashedPassword,
        });
        const token = jsonwebtoken_1.default.sign({
            userId: user._id,
            email: user.email,
            username: user.username,
        }, 'supersecret');
        return {
            token,
            user: {
                id: user._id,
                email: user.email,
                username: user.username,
            },
        };
    },
    login: async ({ userData }) => {
        validation_1.loginValidations({ userData });
        const { email, password } = userData;
        const returnedUser = await User_1.User.findByCondition({ email });
        if (!returnedUser)
            throw new custom_errors_1.CustomError('Email or password is incorrect', 401);
        const isPasswordVerified = await bcryptjs_1.default.compare(password, returnedUser.password);
        if (!isPasswordVerified)
            throw new custom_errors_1.CustomError('Email or password is incorrect', 401);
        const token = jsonwebtoken_1.default.sign({
            userId: returnedUser._id,
            email: returnedUser.email,
            username: returnedUser.username,
        }, 'supersecret');
        return {
            token,
            user: {
                id: returnedUser._id,
                email: returnedUser.email,
                username: returnedUser.username,
            },
        };
    },
    getUserData: async ({ token }) => {
        validation_1.getUserDataValidations({ token });
        const decodedToken = jsonwebtoken_1.default.verify(token, 'supersecret');
        if (!decodedToken)
            throw new custom_errors_1.CustomError('Invalid token', 401);
        return {
            token,
            user: {
                id: decodedToken._id,
                email: decodedToken.email,
                username: decodedToken.username,
            },
        };
    },
};
