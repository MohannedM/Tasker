"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const custom_errors_1 = require("../../errors/custom-errors");
const user_1 = require("../user");
const model_1 = require("./model");
class Task {
    static async findOneByCondition(taskCondition) {
        const task = await model_1.TaskModel.findOne(taskCondition).populate('assignedTo').populate('createdBy');
        return task;
    }
    static async findManyByCondition(taskCondition) {
        const tasks = await model_1.TaskModel.find(taskCondition).populate('assignedTo').populate('createdBy');
        return tasks;
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
    static async update(updateArgs) {
        const { assignedTo, body, title, taskId } = updateArgs;
        const assignee = await user_1.UserModel.findById(assignedTo);
        if (assignedTo && !assignee)
            throw new custom_errors_1.CustomError('Assignee not found', 400);
        const updateData = {};
        if (assignedTo)
            updateData.assignedTo = assignedTo;
        if (body)
            updateData.body = body;
        if (title)
            updateData.title = title;
        const task = await model_1.TaskModel.findByIdAndUpdate(taskId, updateData);
        await task.populate('createdBy').execPopulate();
        await task.populate('assignedTo').execPopulate();
        return task;
    }
    static async delete(taskId) {
        const task = await model_1.TaskModel.findByIdAndDelete(taskId);
        await task.populate('createdBy').execPopulate();
        await task.populate('assignedTo').execPopulate();
        return task;
    }
}
exports.Task = Task;
