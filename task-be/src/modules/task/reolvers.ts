// import { CustomError } from '../errors/custom-errors'
import { CreateTaskInput } from './types' //eslint-disable-line
// import { Task } from './Task'
import { createTaskValidations } from './validation'

export const taskResolvers = {
  createTask: async ({ taskInput }: CreateTaskInput) => {
    createTaskValidations({ taskInput })

    // const task = await Task.add(taskInput)
  },
}
