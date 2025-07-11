require('dotenv').config()
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_Secret

const authInterceptor = (req,res,next) => {

    const authHeaders = req.headers.authorization

    if(!authHeaders || !authHeaders.split(' ')[1]){
        return res.send('authentification failed, no token found')
    }

    token = authHeaders && authHeaders.split(' ')[1]

    if(!token){
        return res.send("couldn't find token")
    }

    const decoded = jwt.verify(token, jwtSecret)

    req.user = decoded.username

    next()
}

module.exports = authInterceptor