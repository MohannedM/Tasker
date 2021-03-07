"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const custom_errors_1 = require("../../errors/custom-errors");
const user_1 = require("../user");
const model_1 = require("./model");
class Task {
    static async findByCondition(taskCondition) {
        const task = await model_1.TaskModel.findOne(taskCondition);
        return task;
    }
    static async add(taskData) {
        const { body, title, assignedTo, createdBy } = taskData;
        const createdUser = await user_1.UserModel.findById(createdBy);
        if (!createdUser)
            throw new custom_errors_1.CustomError('Unauthorized', 401);
        const assignedUser = await user_1.UserModel.findById(assignedTo);
        if (!assignedUser)
            throw new custom_errors_1.CustomError('Assigned user doesn\'t exist', 400);
        const task = new model_1.TaskModel({
            body,
            title,
            createdBy,
            assignedTo,
        });
        await task.populate('createdBy').execPopulate();
        await task.populate('assignedTo').execPopulate();
        await task.save();
        return task;
    }
}
exports.Task = Task;
