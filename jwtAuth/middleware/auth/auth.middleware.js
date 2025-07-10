require('dotenv').config()
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_Secret

const authMiddleWare = (req,res, next) => {
    const authHeader = req.headers.authorization

    console.log(authHeader, 'authHeader')

    if(!authHeader && !authHeader.split(' ')[1]){
        return res.send('Error Occured')
    }

    token = authHeader.split(' ')[1]

    if(!token){
        res.send("couldn't verify user")
    }

    const decoded = jwt.verify(token, jwtSecret)

    req.user = decoded.username

    console.log(decoded)

    next()
}

module.exports = authMiddleWare