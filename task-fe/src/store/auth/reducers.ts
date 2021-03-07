import {
    AUTH_CLEAR,
    AUTH_DISMISS_ERROR,
    AUTH_FAIL,
    AUTH_START,
    AUTH_SUCCESS,
} from "./actionTypes";
import { authState, authAction } from "./types";

const initialState: authState = {
    token: null,
    username: null,
    email: null,
    id: null,
    error: null,
    loading: false,
}

const reducer: (state: authState, action: authAction) => authState = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_START:
            return {
                ...state,
                loading: true,
            }
        case AUTH_SUCCESS:
            return {
                ...state,
                id: action.authData.user.id,
                token: action.authData.token,
                username: action.authData.user.username,
                email: action.authData.user.email,
                loading: false,
            }
        case AUTH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        case AUTH_DISMISS_ERROR:
            return {
                ...state,
                error: null
            }
        case AUTH_CLEAR:
            return {
                ...state,
                id: null,
                token: null,
                username: null,
                email: null,
            }
        default: return state
    }
}

export { reducer as authReducer }