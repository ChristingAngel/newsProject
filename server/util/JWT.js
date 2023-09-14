const jsonwebtoken = require('jsonwebtoken')
const secret = 'andy'
const JWT = {
    generate(value,exprires){
        return jsonwebtoken.sign(value,secret,{expiresIn:exprires})
    },
    veryify(){
        try {
            return jsonwebtoken.verify(token,secret)
        } catch (error) {
            return false
        }
    }
}
module.exports = JWT