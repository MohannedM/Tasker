"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskResolvers = void 0;
const custom_errors_1 = require("../../errors/custom-errors");
const Task_1 = require("./Task");
const validation_1 = require("./validation");
exports.taskResolvers = {
    createTask: async ({ taskInput }, req) => {
        if (!req.isAuth || !req.userId)
            throw new custom_errors_1.CustomError('Unauthorized', 401);
        validation_1.createTaskValidations({ taskInput });
        const { body, title, assignedTo } = taskInput;
        const task = await Task_1.Task.add({
            body,
            title,
            createdBy: req.userId,
            assignedTo,
        });
        return task;
    },
    updateTask: async ({ taskInput }, req) => {
        const { taskId, body, title, assignedTo } = taskInput;
        const task = await Task_1.Task.findOneByCondition({ _id: taskId });
        if (!task)
            throw new custom_errors_1.CustomError('Task not found', 400);
        if (!req.isAuth || !req.userId || req.userId !== task.createdBy)
            throw new custom_errors_1.CustomError('Unauthorized', 401);
        validation_1.updateTaskValidations({ taskInput });
        const updatedTask = await Task_1.Task.update({
            body,
            title,
            taskId,
            assignedTo,
        });
        return updatedTask;
    },
    deleteTask: async ({ taskId }, req) => {
        const task = await Task_1.Task.findOneByCondition({ _id: taskId });
        if (!task)
            throw new custom_errors_1.CustomError('Task not found', 400);
        if (!req.isAuth || !req.userId || req.userId !== task.createdBy)
            throw new custom_errors_1.CustomError('Unauthorized', 401);
        const deletedTask = await Task_1.Task.delete(taskId);
        return deletedTask;
    },
    getUserCreatedTasks: async (_, req) => {
        if (!req.isAuth || !req.userId)
            throw new custom_errors_1.CustomError('Unauthorized', 401);
        const tasks = await Task_1.Task.findManyByCondition({ createdBy: req.userId });
        return tasks;
    },
    getUserAssignedTasks: async (_, req) => {
        if (!req.isAuth || !req.userId)
            throw new custom_errors_1.CustomError('Unauthorized', 401);
        const tasks = await Task_1.Task.findManyByCondition({ assignedTo: req.userId });
        return tasks;
    },
    getTask: async ({ taskId }, req) => {
        if (!req.isAuth || !req.userId)
            throw new custom_errors_1.CustomError('Unauthorized', 401);
        const task = await Task_1.Task.findOneByCondition({ _id: taskId });
        if (!task)
            throw new custom_errors_1.CustomError('Task not found', 404);
        return task;
    },
};
