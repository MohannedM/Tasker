import { CustomError } from '../../errors/custom-errors'
import { UserModel } from '../user'
import { TaskModel } from './model'
import { AddArgs } from './types' // eslint-disable-line

export class Task {
  static async findByCondition (taskCondition: {[key: string]: string}) {
    const task = await TaskModel.findOne(taskCondition)
    return task
  }

  static async add (taskData: AddArgs) {
    const { body, title, assignedTo, createdBy } = taskData

    const createdUser = await UserModel.findById(createdBy)
    if (!createdUser) throw new CustomError('Unauthorized', 401)

    const assignedUser = await UserModel.findById(assignedTo)
    if (!assignedUser) throw new CustomError('Assigned user doesn\'t exist', 400)

    const task = new TaskModel({
      body,
      title,
      createdBy,
      assignedTo,
    })

    await task.populate('createdBy').execPopulate()
    await task.populate('assignedTo').execPopulate()

    await task.save()
    return task
  }
}
