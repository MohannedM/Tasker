// import mongoose from 'mongoose'
import { Request } from 'express' // eslint-disable-line
import { CustomError } from '../../errors/custom-errors'
import { Task } from './Task'
import { CreateTaskInput, ShowTaskInput, UpdateTaskInput, DeleteTaskInput } from './types' //eslint-disable-line
import { createTaskValidations, updateTaskValidations } from './validation'

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

    return task
  },

  updateTask: async ({ taskInput }: UpdateTaskInput, req: Request) => {
    const { taskId, body, title, assignedTo } = taskInput

    const task = await Task.findOneByCondition({ _id: taskId })
    if (!task) throw new CustomError('Task not found', 400)

    if (!req.isAuth || !req.userId || req.userId !== task.createdBy) throw new CustomError('Unauthorized', 401)

    updateTaskValidations({ taskInput })

    const updatedTask = await Task.update({
      body,
      title,
      taskId,
      assignedTo,
    })

    return updatedTask
  },

  deleteTask: async ({ taskId }: DeleteTaskInput, req: Request) => {
    const task = await Task.findOneByCondition({ _id: taskId })
    if (!task) throw new CustomError('Task not found', 400)

    if (!req.isAuth || !req.userId || req.userId !== task.createdBy) throw new CustomError('Unauthorized', 401)

    const deletedTask = await Task.delete(taskId)
    return deletedTask
  },

  getUserCreatedTasks: async (_: any, req: Request) => {
    if (!req.isAuth || !req.userId) throw new CustomError('Unauthorized', 401)

    const tasks = await Task.findManyByCondition({ createdBy: req.userId })

    return tasks
  },

  getUserAssignedTasks: async (_: any, req: Request) => {
    if (!req.isAuth || !req.userId) throw new CustomError('Unauthorized', 401)

    const tasks = await Task.findManyByCondition({ assignedTo: req.userId })

    return tasks
  },

  getTask: async ({ taskId }: ShowTaskInput, req: Request) => {
    if (!req.isAuth || !req.userId) throw new CustomError('Unauthorized', 401)

    const task = await Task.findOneByCondition({ _id: taskId })

    if (!task) throw new CustomError('Task not found', 404)

    return task
  },
}
