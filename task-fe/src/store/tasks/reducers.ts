import {
    CREATE_TASK_SUCCESS,
    GET_USER_TASKS_SUCCESS,
    GET_ASSIGNED_TASKS_SUCCESS,
    TASK_DISMISS_ERROR,
    START_TASK_CALL,
    TASK_CALL_FAILED,
    DELETE_TASK_SUCCESS,
    UPDATE_TASK_SUCCESS,
} from "./actionTypes";
import {
    tasksState,
    tasksAction,
 } from "./types";

const initialState: tasksState = {
    tasks: [],
    task: null,
    assignedTasks: [],
    loading: false,
    redirect: false,
    error: null,
}

const tasksReducer: (state: tasksState, action: tasksAction) => tasksState = (state = initialState, action) => {
    switch(action.type) {
        case TASK_DISMISS_ERROR:
            return {
                ...state,
                error: null,
            }
        case START_TASK_CALL:
            return {
                ...state,
                loading: true,
            }
        case TASK_CALL_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        case CREATE_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                redirect: true,
            }
        case GET_USER_TASKS_SUCCESS:
            return {
                ...state,
                loading: false,
                redirect: false,
                tasks: action.tasks,
            }
        case GET_ASSIGNED_TASKS_SUCCESS:
            return {
                ...state,
                loading: false,
                assignedTasks: action.tasks,
            }
        case UPDATE_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                redirect: true,
            }
        case DELETE_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                redirect: true,
            }
        default: return state
    }
}

export { tasksReducer }
