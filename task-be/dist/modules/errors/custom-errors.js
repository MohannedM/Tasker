"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(message, statusCode, data) {
        super(message);
        this.statusCode = statusCode;
        this.data = data;
        Object.setPrototypeOf(this, CustomError.prototype);
        this.statusCode = statusCode;
        this.data = data;
    }
}
exports.CustomError = CustomError;
