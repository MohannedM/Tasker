// import mongoose from 'mongoose'
import { Request } from 'express' // eslint-disable-line
import { CustomError } from '../../errors/custom-errors'
import { Task } from './Task'
import { CreateTaskInput, ITask } from './types' //eslint-disable-line
import { createTaskValidations } from './validation'
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

export const taskResolvers = {
  createTask: async ({ taskInput }: CreateTaskInput, req: Request) => {
    if (!req.isAuth || !req.userId) throw new CustomError('Unauthorized', 401)

    createTaskValidations({ taskInput })

    const { body, title, assignedTo } = taskInput

    const task = await Task.add({
      body,
      title,
      createdBy: req.userId,
      assignedTo,
    })

    return {
      id: task._id,
      title: task.title,
      body: task.body,
      createdBy: task.createdBy,
      assignedTo: task.assignedTo,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt,
    }
  },
}
