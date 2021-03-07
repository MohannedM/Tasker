"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const taskSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    assignedTo: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
    },
}, { timestamps: true });
const TaskModel = mongoose_1.default.model('Task', taskSchema);
exports.TaskModel = TaskModel;
