import mongoose from 'mongoose'
import { ITask } from './types' //eslint-disable-line

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, { timestamps: true })

const TaskModel = mongoose.model<ITask>('Task', taskSchema)

export { TaskModel }
