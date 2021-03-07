import {
    LOGIN,
    REGISTER,
    AUTH_FAIL,
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_DISMISS_ERROR,
    AUTH_INIT,
    LOGOUT,
    AUTH_CLEAR,
} from './actionTypes'
import {
    loginType,
    registerType,
    authStartType,
    authSuccessType,
    authFailType,
    authDismissErrorType,
    loginInputType,
    registerInputType,
    errorType,
    authDataType,
    authInitType,
    logoutType,
    authClearType,
} from './types'

export const login: (loginInput: loginInputType) => loginType = (loginInput) => {
    return {
        type: LOGIN,
        loginInput,
    }
}

export const register: (registerInput: registerInputType) => registerType = (registerInput) => {
    return {
        type: REGISTER,
        registerInput,
    }
}

export const authInit: () => authInitType = () => {
    return {
        type: AUTH_INIT,
    }
}

export const logout: () => logoutType = () => {
    return {
        type: LOGOUT,
    }
}

export const authClear: () => authClearType = () => {
    return {
        type: AUTH_CLEAR,
    }
}

export const authStart: () => authStartType = () => {
    return {
        type: AUTH_START
    }
}

export const authSuccess: (authData: authDataType) => authSuccessType = (authData) => {
    return {
        type: AUTH_SUCCESS,
        authData,
    }
}

export const authFail: (error: errorType) => authFailType = (error) => {
    return {
        type: AUTH_FAIL,
        error,
    }
}

export const authDismissError: () => authDismissErrorType = () => {
    return {
        type: AUTH_DISMISS_ERROR,
    }
}
