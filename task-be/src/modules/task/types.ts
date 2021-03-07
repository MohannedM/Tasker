import { Document, Types } from 'mongoose' //eslint-disable-line
import { UserDoc } from '../user/types' //eslint-disable-line

export interface TaskDoc extends Document {
    _id: string
    title: string
    body: string
    createdBy: UserDoc | Types.ObjectId | string
    assignedTo?: UserDoc | Types.ObjectId | string
    createdAt: string
    updatedAt: string
}

export interface CreateTaskInput {
    taskInput: {
    title: string
    body: string
    assignedTo?: string
 }
}

export interface ShowTaskArgs {
    taskId: string
}

export interface UpdateTaskInput {
    taskInput: {
    taskId: string
    title?: string
    body?: string
    assignedTo?: string
 }
}

export interface DeleteTaskArgs {
    taskId: string
}

export interface AddArgs {
    title: string
    body: string
    createdBy: string
    assignedTo?: string
}

export interface UpdateArgs {
    title?: string
    body?: string
    assignedTo?: string
}
