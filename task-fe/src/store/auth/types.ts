import {
    AUTH_DISMISS_ERROR,
    LOGIN,
    REGISTER,
    AUTH_INIT,
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAIL,
    LOGOUT,
    AUTH_CLEAR,
} from './actionTypes'

export interface loginInputType {
    email: string
    password: string
}

export interface registerInputType {
    email: string
    username: string
    password: string
}

export interface errorType {
    message: string
    status?: number
    data?: {
        message: string
    }[]
}

export interface authDataType {
    token: string
    user: {
        id: string
        email: string
        username: string
    }
}

export interface loginType {
    type: typeof LOGIN
    loginInput: loginInputType,
}

export interface registerType {
    type: typeof REGISTER
    registerInput: registerInputType,
}

export interface authInitType {
    type: typeof AUTH_INIT
}

export interface logoutType {
    type: typeof LOGOUT
}

export interface authClearType {
    type: typeof AUTH_CLEAR
}


export interface authStartType {
    type: typeof AUTH_START
}

export interface authFailType {
    type: typeof AUTH_FAIL
    error: errorType
}

export interface authSuccessType {
    type: typeof AUTH_SUCCESS
    authData: authDataType
}

export interface authDismissErrorType {
    type: typeof AUTH_DISMISS_ERROR
}

export interface authState {
    id: string | null
    token: string | null
    email: string | null
    username: string | null
    loading: boolean
    error: errorType | null
}

export type authAction =
loginType | registerType | authStartType |
authSuccessType | authFailType |  authDismissErrorType |
logoutType | authClearType | authInitType