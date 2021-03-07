import { CustomError } from '../../errors/custom-errors'
import { UserModel } from '../user'
import { TaskModel } from './model'
import { AddArgs, UpdateArgs } from './types' // eslint-disable-line

export class Task {
  static async findOneByCondition (taskCondition: {[key: string]: string}) {
    const task = await TaskModel.findOne(taskCondition).populate('assignedTo').populate('createdBy')
    return task
  }

  static async findManyByCondition (taskCondition: {[key: string]: string}) {
    const tasks = await TaskModel.find(taskCondition).populate('assignedTo').populate('createdBy')
    return tasks
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

  static async update (updateArgs: UpdateArgs) {
    const { assignedTo, body, title, taskId } = updateArgs

    const assignee = await UserModel.findById(assignedTo)
    if (assignedTo && !assignee) throw new CustomError('Assignee not found', 400)

    const updateData: {[key: string]: any} = {}
    if (assignedTo) updateData.assignedTo = assignedTo
    if (body) updateData.body = body
    if (title) updateData.title = title

    const task = await TaskModel.findByIdAndUpdate(taskId, updateData)

    await task!.populate('createdBy').execPopulate()
    await task!.populate('assignedTo').execPopulate()

    return task
  }

  static async delete (taskId: string) {
    const task = await TaskModel.findByIdAndDelete(taskId)

    await task!.populate('createdBy').execPopulate()
    await task!.populate('assignedTo').execPopulate()

    return task
  }
}
