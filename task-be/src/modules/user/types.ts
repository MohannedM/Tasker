import { Document } from 'mongoose' //eslint-disable-line

export interface IUser extends Document {
    _id: string
    username: string
    email: string
    password: string
}

export interface RegisterInput {
    userData: {
    username: string
    email: string
    password: string
 }
}

export interface LoginInput {
    userData: {
    email: string
    password: string
 }
}

export interface AddArgs {
    username: string
    email: string
    password: string
}

export interface getUserDataArgs {
    token: string
}
