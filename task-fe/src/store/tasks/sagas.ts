import axios from 'axios'
import { put } from 'redux-saga/effects'
import {
    startTaskCall,
    taskCallFailed,
    createTaskSuccess,
    getAssignedTasksSuccess,
    getTaskSuccess,
    getUserTasksSuccess,
    deleteTaskSuccess,
    updateTaskSuccess,
} from './actions'
import { createTaskQuery, deleteTaskQuery, getAssignedTasksQuery, getTaskQuery, getUserTasksQuery, updateTaskQuery } from './queries'
import { createTaskType, deleteTaskType, getAssignedTasksType, getTaskType, getUserTasksType, updateTaskType } from './types'

export function* createTaskSaga(action: createTaskType) {
    yield put(startTaskCall())
    try {
        const response: {data: any} = yield axios.post('http://localhost:4000/graphql', createTaskQuery(action.taskInput), {
            headers: {
                Authorization: `Bearer ${action.token}`
            }
        })
        yield put(createTaskSuccess(response.data.data.createTask))
    } catch (error) {
        yield put(taskCallFailed(error.response.data.errors[0]))
    }
}

export function* getUserTasksSaga(action: getUserTasksType) {
    yield put(startTaskCall())
    try {
        const response: {data: any} = yield axios.post('http://localhost:4000/graphql', getUserTasksQuery(), {
            headers: {
                Authorization: `Bearer ${action.token}`
            }
        })
        yield put(getUserTasksSuccess(response.data.data.getUserCreatedTasks))
    } catch(error) {
        yield put(taskCallFailed((error.response.data.errors[0])))
    }
}

export function* getAssignedTasksSaga(action: getAssignedTasksType) {
    yield put(startTaskCall())
    try {
        const response: {data: any} = yield axios.post('http://localhost:4000/graphql', getAssignedTasksQuery(), {
            headers: {
                Authorization: `Bearer ${action.token}`
            }
        })
        yield put(getAssignedTasksSuccess(response.data.data.getUserCreatedTasks))
    } catch(error) {
        yield put(taskCallFailed((error.response.data.errors[0])))
    }
}

export function* getTaskSaga(action: getTaskType) {
    yield put(startTaskCall())
    try {
        const response: {data: any} = yield axios.post('http://localhost:4000/graphql', getTaskQuery(action.taskId), {
            headers: {
                Authorization: `Bearer ${action.token}`
            }
        })
        yield put(getTaskSuccess(response.data.data.getTask))
    } catch(error) {
        yield put(taskCallFailed((error.response.data.errors[0])))
    }
}

export function* updateTaskSaga(action: updateTaskType) {
    yield put(startTaskCall())
    try {
        const response: {data: any} = yield axios.post('http://localhost:4000/graphql', updateTaskQuery(action.taskId, action.taskInput), {
            headers: {
                Authorization: `Bearer ${action.token}`
            }
        })
        yield put(updateTaskSuccess(response.data.data.updateTask))
    } catch(error) {
        yield put(taskCallFailed((error.response.data.errors[0])))
    }
}

export function* deleteTaskSaga(action: deleteTaskType) {
    yield put(startTaskCall())
    try {
        const response: {data: any} = yield axios.post('http://localhost:4000/graphql', deleteTaskQuery(action.taskId), {
            headers: {
                Authorization: `Bearer ${action.token}`
            }
        })
        yield put(deleteTaskSuccess(response.data.data.deleteTask))
    } catch(error) {
        yield put(taskCallFailed((error.response.data.errors[0])))
    }
}
