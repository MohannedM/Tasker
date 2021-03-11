import { takeEvery } from 'redux-saga/effects'
import { CREATE_TASK, DELETE_TASK, GET_ASSIGNED_TASKS, GET_USER_TASKS, UPDATE_TASK } from './actionTypes'
import { createTaskSaga, deleteTaskSaga, getAssignedTasksSaga, getUserTasksSaga, updateTaskSaga } from './sagas'

export type {
    createTaskType,
    taskInputType,
    taskDismissErrorType,
} from './types'

export {
    createTask,
    taskDismissError,
} from './actions'

export { tasksReducer } from './reducers'

export function* rootTasksSaga() {
    yield takeEvery(CREATE_TASK, createTaskSaga)
    yield takeEvery(GET_USER_TASKS, getUserTasksSaga)
    yield takeEvery(GET_ASSIGNED_TASKS, getAssignedTasksSaga)
    yield takeEvery(UPDATE_TASK, updateTaskSaga)
    yield takeEvery(DELETE_TASK, deleteTaskSaga)
}