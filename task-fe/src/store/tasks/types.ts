import { authDataType } from '../auth'
import {
    START_TASK_CALL,
    TASK_CALL_FAILED,
    CREATE_TASK,
    CREATE_TASK_SUCCESS,
    GET_USER_TASKS,
    GET_USER_TASKS_SUCCESS,
    GET_ASSIGNED_TASKS,
    GET_ASSIGNED_TASKS_SUCCESS,
    GET_TASK,
    GET_TASK_SUCCESS,
    DELETE_TASK,
    DELETE_TASK_SUCCESS,
    TASK_DISMISS_ERROR,
    UPDATE_TASK,
    UPDATE_TASK_SUCCESS,
} from './actionTypes'

export interface errorType {
    message: string
    status?: number
    data?: {
        message: string
    }[]
}

export interface taskDataType {
    _id: string
    title: string
    body: string
    createdBy: authDataType
    assignedTo: authDataType
    createdAt: string
    updatedAt: string
}

export interface taskInputType {
    title: string
    body: string
    assignedTo: string
}

export interface startTaskCallType {
    type: typeof START_TASK_CALL
}

export interface taskCallFailedType {
    type: typeof TASK_CALL_FAILED
    error: errorType
}

export interface taskDismissErrorType {
    type: typeof TASK_DISMISS_ERROR
}

export interface createTaskType {
    type: typeof CREATE_TASK
    token: string
    taskInput: taskInputType
}

export interface createTaskSuccessType {
    type: typeof CREATE_TASK_SUCCESS
    taskData:  taskDataType
}

export interface getUserTasksType {
    type: typeof GET_USER_TASKS
    token: string
}

export interface getUserTasksSuccessType {
    type: typeof GET_USER_TASKS_SUCCESS
    tasks: taskDataType[]
}

export interface getAssignedTasksType {
    type: typeof GET_ASSIGNED_TASKS
    token: string
}

export interface getAssignedTasksSuccessType {
    type: typeof GET_ASSIGNED_TASKS_SUCCESS
    tasks: taskDataType[]
}

export interface getTaskType {
    type: typeof GET_TASK
    taskId: string
    token: string
}
export interface getTaskSuccessType {
    type: typeof GET_TASK_SUCCESS
    task: taskDataType
}

export interface updateTaskType {
    type: typeof UPDATE_TASK
    taskId: string
    taskInput: taskInputType
    token: string
}
export interface updateTaskSuccessType {
    type: typeof UPDATE_TASK_SUCCESS
    task: taskDataType
}
export interface deleteTaskType {
    type: typeof DELETE_TASK
    taskId: string
    token: string
}

export interface deleteTaskSuccessType {
    type: typeof DELETE_TASK_SUCCESS
    task: taskDataType
}

export interface tasksState {
    loading: boolean
    tasks: taskDataType[]
    task: taskDataType | null
    assignedTasks: taskDataType[]
    redirect: boolean
    error: errorType | null
}


export type tasksAction =
startTaskCallType | taskCallFailedType |
createTaskType  | createTaskSuccessType  |
getUserTasksType | getUserTasksSuccessType   |
getAssignedTasksType | getAssignedTasksSuccessType   |
updateTaskType | updateTaskSuccessType |
deleteTaskType | deleteTaskSuccessType |
taskDismissErrorType
