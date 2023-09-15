const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserType = {
    username:String,
    password:String,
    gender:Number,
    introduction:String, //简介
    avatar:String, //头像
    role:Number //管理员1 编辑2
}

//user模型===>user集合
const UserModel = mongoose.model('users',new Schema(UserType))

module.exports = UserModel