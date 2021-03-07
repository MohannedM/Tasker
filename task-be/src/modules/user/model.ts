import mongoose from 'mongoose'
import { IUser } from './types' //eslint-disable-line

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

const UserModel = mongoose.model<IUser>('User', userSchema)

export { UserModel }
