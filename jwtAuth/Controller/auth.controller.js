
require('dotenv').config()

const jwtSecret = process.env.JWT_Secret
const jwt = require('jsonwebtoken')


const login = (req,res) => {
    const{username, password} = req.body

    if(!username && !password){
        res.send('Enter username and password')
    }

    const token = jwt.sign({username}, jwtSecret, {expiresIn: '1h'})

    res.json(token)
}

const dashBoard = (req,res) => {
    const secretNumber = Math.floor(Math.random()*15)

    console.log(req.user)

    res.json({
        message : `Here is your secret number ${secretNumber }. You are welcome ${req.user}`
    })  

}

module.exports = {
    login,
    dashBoard
}