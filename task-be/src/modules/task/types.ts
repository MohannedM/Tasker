import { Document, Types } from 'mongoose' //eslint-disable-line
import { IUser } from '../user/types' //eslint-disable-line

export interface ITask extends Document {
    _id: string
    title: string
    body: string
    createdBy: IUser | Types.ObjectId | string
    assignedTo: IUser | Types.ObjectId | string
    createdAt: string
    updatedAt: string
}

export interface CreateTaskInput {
    taskInput: {
    title: string
    body: string
    assignedTo: string
 }
}

export interface ShowTaskInput {
    taskId: string
}

export interface DeleteTaskInput {
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

export interface UpdateTaskArgs {
    body?: string
    title?: string
    createdBy: string
    assignedTo?: string
}

export interface AddArgs {
    title: string
    body: string
    createdBy: string
    assignedTo: string
}

export interface UpdateArgs {
    taskId: string
    title?: string
    body?: string
    assignedTo?: string
}
