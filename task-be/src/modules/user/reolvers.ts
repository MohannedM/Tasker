import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { CustomError } from '../../errors/custom-errors'
import { RegisterInput, LoginInput, getUserDataArgs } from './types' //eslint-disable-line
import { User } from './User'
import { registerValidations, loginValidations, getUserDataValidations } from './validation'
import { Request } from 'express' // eslint-disable-line

export const userResolvers = {
  register: async ({ userData }: RegisterInput) => {
    registerValidations({ userData })

    const { username, email, password } = userData

    const usernameExists = await User.findOneByCondition({ username })
    if (usernameExists) throw new CustomError('Username already exists', 400)

    const emailExists = await User.findOneByCondition({ email })
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
        _id: user._id,
        email: user.email,
        username: user.username,
      },
    }
  },

  login: async ({ userData }: LoginInput) => {
    loginValidations({ userData })

    const { email, password } = userData

    const returnedUser = await User.findOneByCondition({ email })
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
        _id: returnedUser._id,
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
        _id: decodedToken._id,
        email: decodedToken.email,
        username: decodedToken.username,
      },
    }
  },

  getUsers: async (_: any, req: Request) => {
    if (!req.isAuth || !req.userId) throw new CustomError('Unauthorized', 401)

    const users = await User.all()
    return users
  },
}
