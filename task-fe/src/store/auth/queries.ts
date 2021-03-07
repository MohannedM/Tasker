import {
    loginInputType,
    registerInputType,
} from './types'

export const loginQuery = (loginInput: loginInputType) => {
    return {
        query: `
            mutation {
                login(userData: {
                    email: "${loginInput.email}",
                    password: "${loginInput.password}"
                }) {
                token
                user{
                    id
                    username
                    email
                }
                }
            }
        `
    }
}

export const registerQuery = (registerInput: registerInputType) => {
    return {
        query: `
            mutation {
                register(userData: {
                    username: "${registerInput.username}",
                    email: "${registerInput.email}",
                    password: "${registerInput.password}",
                }) {
                token
                user{
                    id
                    username
                    email
                }
                }
            }
        `
    }
}