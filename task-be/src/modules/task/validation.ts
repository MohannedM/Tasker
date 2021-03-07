import validator from 'validator'
import { CreateTaskInput, UpdateTaskInput } from './types' //eslint-disable-line
import { CustomError } from '../../errors/custom-errors'

export const createTaskValidations = ({ taskInput }: CreateTaskInput) => {
  const errors = []
  if (!validator.isLength(taskInput.title, { min: 4, max: 30 }) || validator.isEmpty(taskInput.title)) {
    errors.push({ message: 'Title should be between 4 and 30 characters' })
  }
  if (!validator.isLength(taskInput.body, { min: 5, max: 200 }) || validator.isEmpty(taskInput.body)) {
    errors.push({ message: 'Body should be between 5 and 200 characters' })
  }
  if (errors.length > 0) {
    throw new CustomError('Invalid input', 400, errors)
  }
  return taskInput
}

export const updateTaskValidations = ({ taskInput }: UpdateTaskInput) => {
  const errors = []
  if (!taskInput.taskId || validator.isEmpty(taskInput.taskId)) {
    errors.push({ message: 'TaskId is required' })
  }
  if (taskInput.title) {
    if (!validator.isEmpty(taskInput.title) && !validator.isLength(taskInput.title, { min: 4, max: 30 })) {
      errors.push({ message: 'Title should be between 4 and 30 characters' })
    }
  }
  if (taskInput.body) {
    if (!validator.isEmpty(taskInput.body) && !validator.isLength(taskInput.body, { min: 5, max: 200 })) {
      errors.push({ message: 'Body should be between 5 and 200 characters' })
    }
  }
  if (errors.length > 0) {
    throw new CustomError('Invalid input', 400, errors)
  }
  return taskInput
}
