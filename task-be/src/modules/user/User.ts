import { UserModel } from './model'
import { AddArgs } from './types' // eslint-disable-line

export class User {
  static async findOneByCondition (userCondition: {[key: string]: string}) {
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

  static async all () {
    const query = UserModel.find()

    query.select('-password')

    const users = await query.exec()

    return users
  }
}
