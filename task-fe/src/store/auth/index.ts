import { takeEvery } from 'redux-saga/effects'
import { AUTH_INIT, LOGIN, LOGOUT, REGISTER } from './actionTypes'
import { authInitSaga, loginSaga, logoutSaga, registerSaga } from './sagas'

export {
    login,
    register,
    logout,
    authInit,
    authDismissError,
} from './actions'

export type {
    errorType,
    loginInputType,
    registerInputType,
    loginType,
    registerType,
    authState,
    authInitType,
    logoutType,
    authDismissErrorType,
    authDataType,
} from './types'

export { authReducer } from './reducers'

export function* rootAuthSaga() {
    yield takeEvery(LOGIN, loginSaga)
    yield takeEvery(REGISTER, registerSaga)
    yield takeEvery(LOGOUT, logoutSaga)
    yield takeEvery(AUTH_INIT, authInitSaga)
}