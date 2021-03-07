import { TaskModel } from './model'
import { AddArgs } from './types' // eslint-disable-line

export class Task {
  static async findByCondition (taskCondition: {[key: string]: string}) {
    const task = await TaskModel.findOne(taskCondition)
    return task
  }

  static async add (taskData: AddArgs) {
    const { body, title, assignedTo } = taskData
    const task = new TaskModel({
      body,
      title,
      assignedTo,
    })

    await task.save()
    return task
  }
}
