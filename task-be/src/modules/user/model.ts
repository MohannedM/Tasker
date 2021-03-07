import mongoose from 'mongoose'
import { UserDoc } from './types' //eslint-disable-line

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

const UserModel = mongoose.model<UserDoc>('User', userSchema)

export { UserModel }
