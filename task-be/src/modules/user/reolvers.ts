import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { CustomError } from '../../errors/custom-errors'
import { RegisterInput, LoginInput, getUserDataArgs } from './types' //eslint-disable-line
import { User } from './User'
import { registerValidations, loginValidations, getUserDataValidations } from './validation'

export const userResolvers = {
  register: async ({ userData }: RegisterInput) => {
    registerValidations({ userData })

    const { username, email, password } = userData

    const usernameExists = await User.findByCondition({ username })
    if (usernameExists) throw new CustomError('Username already exists', 400)

    const emailExists = await User.findByCondition({ email })
    if (emailExists) throw new CustomError('Email already exists', 400)

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await User.add({
      username,
      email,
      password: hashedPassword,
    })

    const token = jwt.sign({
      userId: user._id,
      email: user.email,
      username: user.username,
    }, 'supersecret')

    return {
      token,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    }
  },

  login: async ({ userData }: LoginInput) => {
    loginValidations({ userData })

    const { email, password } = userData

    const returnedUser = await User.findByCondition({ email })
    if (!returnedUser) throw new CustomError('Email or password is incorrect', 401)

    const isPasswordVerified = await bcrypt.compare(password, returnedUser.password)
    if (!isPasswordVerified) throw new CustomError('Email or password is incorrect', 401)

    const token = jwt.sign({
      userId: returnedUser._id,
      email: returnedUser.email,
      username: returnedUser.username,
    }, 'supersecret')

    return {
      token,
      user: {
        id: returnedUser._id,
        email: returnedUser.email,
        username: returnedUser.username,
      },
    }
  },

  getUserData: async ({ token }: getUserDataArgs) => {
    getUserDataValidations({ token })

    const decodedToken: any = jwt.verify(token, 'supersecret')

    if (!decodedToken) throw new CustomError('Invalid token', 401)

    return {
      token,
      user: {
        id: decodedToken._id,
        email: decodedToken.email,
        username: decodedToken.username,
      },
    }
  },
}
