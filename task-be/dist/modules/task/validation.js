"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskValidations = exports.createTaskValidations = void 0;
const validator_1 = __importDefault(require("validator"));
const custom_errors_1 = require("../../errors/custom-errors");
const createTaskValidations = ({ taskInput }) => {
    const errors = [];
    if (!validator_1.default.isLength(taskInput.title, { min: 4, max: 30 }) || validator_1.default.isEmpty(taskInput.title)) {
        errors.push({ message: 'Title should be between 4 and 30 characters' });
    }
    if (!validator_1.default.isLength(taskInput.body, { min: 5, max: 200 }) || validator_1.default.isEmpty(taskInput.body)) {
        errors.push({ message: 'Body should be between 5 and 200 characters' });
    }
    if (validator_1.default.isEmpty(taskInput.assignedTo)) {
        errors.push({ message: 'Assignee should be specified' });
    }
    if (errors.length > 0) {
        throw new custom_errors_1.CustomError('Invalid input', 400, errors);
    }
    return taskInput;
};
exports.createTaskValidations = createTaskValidations;
const updateTaskValidations = ({ taskInput }) => {
    const errors = [];
    if (!taskInput.taskId || validator_1.default.isEmpty(taskInput.taskId)) {
        errors.push({ message: 'TaskId is required' });
    }
    if (taskInput.title) {
        if (!validator_1.default.isEmpty(taskInput.title) && !validator_1.default.isLength(taskInput.title, { min: 4, max: 30 })) {
            errors.push({ message: 'Title should be between 4 and 30 characters' });
        }
    }
    if (taskInput.body) {
        if (!validator_1.default.isEmpty(taskInput.body) && !validator_1.default.isLength(taskInput.body, { min: 5, max: 200 })) {
            errors.push({ message: 'Body should be between 5 and 200 characters' });
        }
    }
    if (errors.length > 0) {
        throw new custom_errors_1.CustomError('Invalid input', 400, errors);
    }
    return taskInput;
};
exports.updateTaskValidations = updateTaskValidations;
