import { UserModel } from './model'
import { AddArgs } from './types' // eslint-disable-line

export class User {
  static async findByCondition (userCondition: {[key: string]: string}) {
    const user = await UserModel.findOne(userCondition)
    return user
  }

  static async add (userData: AddArgs) {
    const { email, username, password } = userData
    const user = new UserModel({
      email,
      username,
      password,
    })

    await user.save()
    return user
  }
}
