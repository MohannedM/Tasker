import validator from 'validator'
import { getUserDataArgs, LoginInput, RegisterInput } from './types' //eslint-disable-line
import { CustomError } from '../../errors/custom-errors'

export const registerValidations = ({ userData }: RegisterInput) => {
  const errors = []
  if (!validator.isEmail(userData.email)) {
    errors.push({ message: 'The email you entered is invalid' })
  }
  if (!validator.isLength(userData.username, { min: 4, max: 30 }) || validator.isEmpty(userData.username)) {
    errors.push({ message: 'Username should be between 4 and 30 characters' })
  }
  if (!validator.isLength(userData.password, { min: 4, max: 20 }) || validator.isEmpty(userData.password)) {
    errors.push({ message: 'Password should be between 4 and 20 characters' })
  }
  if (errors.length > 0) {
    throw new CustomError('Invalid input', 400, errors)
  }
  return userData
}

export const loginValidations = ({ userData }: LoginInput) => {
  const errors = []
  if (!validator.isEmail(userData.email)) {
    errors.push({ message: 'The email you entered is invalid' })
  }
  if (!validator.isLength(userData.password, { min: 4, max: 20 }) || validator.isEmpty(userData.password)) {
    errors.push({ message: 'Password should be between 4 and 20 characters' })
  }
  if (errors.length > 0) {
    throw new CustomError('Invalid input', 400, errors)
  }
  return userData
}

export const getUserDataValidations = ({ token }: getUserDataArgs) => {
  const errors = []
  if (validator.isEmpty(token)) {
    errors.push({ message: 'Token is required' })
  }
  if (errors.length > 0) {
    throw new CustomError('Invalid input', 400, errors)
  }
  return token
}
