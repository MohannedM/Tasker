import { put } from 'redux-saga/effects'
import { authClear, authFail, authStart, authSuccess } from './actions'
import { authInitType, loginType, logoutType, registerType } from './types'
import axios from 'axios'
import { loginQuery, registerQuery } from './queries'

export function* loginSaga(action: loginType) {
    yield put(authStart())
    try {
        const query = loginQuery(action.loginInput)
        const response: {data: any} = yield axios.post('http://localhost:4000/graphql', query)
        yield localStorage.setItem('token', response.data.data.login.token)
        yield localStorage.setItem('id', response.data.data.login.user.id)
        yield localStorage.setItem('username', response.data.data.login.user.username)
        yield localStorage.setItem('email', response.data.data.login.user.email)
        yield put(authSuccess(response.data.data.login))
    } catch (error) {
        yield put(authFail(error.response.data.errors[0]))
    }
}

export function* registerSaga(action: registerType) {
    yield put(authStart())
    try {
        const query = registerQuery(action.registerInput)
        const response: {data: any} = yield axios.post('http://localhost:4000/graphql', query)
        yield localStorage.setItem('token', response.data.data.register.token)
        yield localStorage.setItem('id', response.data.data.register.user.id)
        yield localStorage.setItem('username', response.data.data.register.user.username)
        yield localStorage.setItem('email', response.data.data.register.user.email)
        yield put(authSuccess(response.data.data.register))
    } catch (error) {
        yield put(authFail(error.response.data.errors[0]))
    }
}

export function* authInitSaga(action: authInitType) {
    const id: string | null = yield localStorage.getItem('id')
    const token: string | null = yield localStorage.getItem('token')
    const username: string | null = yield localStorage.getItem('username')
    const email: string | null = yield localStorage.getItem('email')

    if (!id || !token || !username || !email) return

    yield put(authSuccess({
        token,
        user: {
            id,
            username,
            email,
        }
    }))
}

export function* logoutSaga(action: logoutType) {
    yield localStorage.removeItem('token')
    yield localStorage.removeItem('id')
    yield localStorage.removeItem('username')
    yield localStorage.removeItem('email')

    yield put(authClear())
}
