const UserService = require('../../services/admin/UserService')
const JWT = require('../../util/JWT')
const UserController = {
    login: async (req, res) => {
        console.log(req.body);
        //返回数组
        let result = await UserService.login(req.body)
        if (result.length === 0) {
            res.send({
                code: '-1',
                error: '用户名不匹配',
            })
        } else {
            //生成token
            const token = JWT.generate({
                _id: result[0]._id,
                username: result[0].username
            }, '10s')

            res.header('Authorization', token)

            res.send({
                ActionType: 'OK',
                data:{
                    username: result[0].username,
                    gender: result[0].gender ? result[0].gender : 0,
                    introduction: result[0].introduction, //简介
                    avatar: result[0].avatar, //头像
                    role: result[0].role //管理员1 编辑2
                }
            })
        }

    }
}

module.exports = UserController