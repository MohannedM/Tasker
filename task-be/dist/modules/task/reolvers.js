"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskResolvers = void 0;
const custom_errors_1 = require("../../errors/custom-errors");
const Task_1 = require("./Task");
const validation_1 = require("./validation");
// import { UserModel } from '../user'
// export const taskResolvers = {
//   Task: {
//     createdBy: async (parent: ITask) => {
//       if (!(parent.createdBy instanceof mongoose.Types.ObjectId)) return parent.createdBy
//       const createdBy = await UserModel.findById(parent.createdBy)
//       return createdBy
//     },
//     assignedTo: async (parent: ITask) => {
//       if (!(parent.assignedTo instanceof mongoose.Types.ObjectId)) return parent.assignedTo
//       const assignedTo = await UserModel.findById(parent.assignedTo)
//       return assignedTo
//     },
//   },
//   createTask: async ({ taskInput }: CreateTaskInput, req: Request) => {
//     if (!req.isAuth || !req.userId) throw new CustomError('Unauthorized', 401)
//     createTaskValidations({ taskInput })
//     const { body, title, assignedTo } = taskInput
//     const task = await Task.add({
//       body,
//       title,
//       createdBy: req.userId,
//       assignedTo,
//     })
//     return {
//       id: task._id,
//       title: task.title,
//       body: task.body,
//       createdBy: task.createdBy,
//       assignedTo: task.assignedTo,
//       createdAt: task.createdAt,
//       updatedAt: task.updatedAt,
//     }
//   },
// }
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
        return {
            id: task._id,
            title: task.title,
            body: task.body,
            createdBy: task.createdBy,
            assignedTo: task.assignedTo,
            createdAt: task.createdAt,
            updatedAt: task.updatedAt,
        };
    },
};
