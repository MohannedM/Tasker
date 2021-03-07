"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserDataValidations = exports.loginValidations = exports.registerValidations = void 0;
const validator_1 = __importDefault(require("validator"));
const custom_errors_1 = require("../../errors/custom-errors");
const registerValidations = ({ userData }) => {
    const errors = [];
    if (!validator_1.default.isEmail(userData.email)) {
        errors.push({ message: 'The email you entered is invalid' });
    }
    if (!validator_1.default.isLength(userData.username, { min: 4, max: 30 }) || validator_1.default.isEmpty(userData.username)) {
        errors.push({ message: 'Username should be between 4 and 30 characters' });
    }
    if (!validator_1.default.isLength(userData.password, { min: 4, max: 20 }) || validator_1.default.isEmpty(userData.password)) {
        errors.push({ message: 'Password should be between 4 and 20 characters' });
    }
    if (errors.length > 0) {
        throw new custom_errors_1.CustomError('Invalid input', 400, errors);
    }
    return userData;
};
exports.registerValidations = registerValidations;
const loginValidations = ({ userData }) => {
    const errors = [];
    if (!validator_1.default.isEmail(userData.email)) {
        errors.push({ message: 'The email you entered is invalid' });
    }
    if (!validator_1.default.isLength(userData.password, { min: 4, max: 20 }) || validator_1.default.isEmpty(userData.password)) {
        errors.push({ message: 'Password should be between 4 and 20 characters' });
    }
    if (errors.length > 0) {
        throw new custom_errors_1.CustomError('Invalid input', 400, errors);
    }
    return userData;
};
exports.loginValidations = loginValidations;
const getUserDataValidations = ({ token }) => {
    const errors = [];
    if (validator_1.default.isEmpty(token)) {
        errors.push({ message: 'Token is required' });
    }
    if (errors.length > 0) {
        throw new custom_errors_1.CustomError('Invalid input', 400, errors);
    }
    return token;
};
exports.getUserDataValidations = getUserDataValidations;
