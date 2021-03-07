"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const model_1 = require("./model");
class User {
    static async findByCondition(userCondition) {
        const user = await model_1.UserModel.findOne(userCondition);
        return user;
    }
    static async add(userData) {
        const { email, username, password } = userData;
        const user = new model_1.UserModel({
            email,
            username,
            password,
        });
        await user.save();
        return user;
    }
}
exports.User = User;
