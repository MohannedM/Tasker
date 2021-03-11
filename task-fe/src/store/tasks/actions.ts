import { errorType } from '../auth'
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
    UPDATE_TASK,
    UPDATE_TASK_SUCCESS,
    DELETE_TASK,
    DELETE_TASK_SUCCESS,
    TASK_DISMISS_ERROR,
} from './actionTypes'

import {
    startTaskCallType,
    taskCallFailedType,
    createTaskType,
    createTaskSuccessType,
    taskDismissErrorType,
    taskInputType,
    taskDataType,
    getUserTasksType,
    getUserTasksSuccessType,
    getAssignedTasksSuccessType,
    getAssignedTasksType,
    updateTaskSuccessType,
    updateTaskType,
    deleteTaskSuccessType,
    deleteTaskType,
    getTaskSuccessType,
    getTaskType,
} from './types'

export const taskDismissError: () => taskDismissErrorType = () => {
    return {
        type: TASK_DISMISS_ERROR
    }
}

export const startTaskCall: () => startTaskCallType = () => {
    return {
        type: START_TASK_CALL
    }
}

export const taskCallFailed: (error: errorType) => taskCallFailedType = (error) => {
    return {
        type: TASK_CALL_FAILED,
        error,
    }
}

export const createTask: (token: string, taskInput: taskInputType) => createTaskType = (token, taskInput) => {
    return {
        type: CREATE_TASK,
        token,
        taskInput,
    }
}

export const createTaskSuccess: (taskData: taskDataType) => createTaskSuccessType = (taskData) => {
    return {
        type: CREATE_TASK_SUCCESS,
        taskData,
    }
}

export const getUserTasks: (token: string) => getUserTasksType = (token) => {
    return {
        type: GET_USER_TASKS,
        token,
    }
}

export const getUserTasksSuccess: (tasks: taskDataType[]) => getUserTasksSuccessType = (tasks) => {
    return {
        type: GET_USER_TASKS_SUCCESS,
        tasks,
    }
}

export const getAssignedTasks: (token: string) => getAssignedTasksType = (token) => {
    return {
        type: GET_ASSIGNED_TASKS,
        token,
    }
}

export const getAssignedTasksSuccess: (tasks: taskDataType[]) => getAssignedTasksSuccessType = (tasks) => {
    return {
        type: GET_ASSIGNED_TASKS_SUCCESS,
        tasks,
    }
}

export const getTask: (token: string, taskId: string) => getTaskType = (token, taskId) => {
    return {
        type: GET_TASK,
        taskId,
        token,
    }
}

export const getTaskSuccess: (task: taskDataType) => getTaskSuccessType = (task) => {
    return {
        type: GET_TASK_SUCCESS,
        task,
    }
}

export const updateTask: (token: string, taskId: string, taskInput: taskInputType) => updateTaskType = (token, taskId, taskInput) => {
    return {
        type: UPDATE_TASK,
        taskInput,
        taskId,
        token,
    }
}

export const updateTaskSuccess: (task: taskDataType) => updateTaskSuccessType = (task) => {
    return {
        type: UPDATE_TASK_SUCCESS,
        task,
    }
}

export const deleteTask: (token: string, taskId: string) => deleteTaskType = (token, taskId) => {
    return {
        type: DELETE_TASK,
        taskId,
        token,
    }
}

export const deleteTaskSuccess: (task: taskDataType) => deleteTaskSuccessType = (task) => {
    return {
        type: DELETE_TASK_SUCCESS,
        task,
    }
}
