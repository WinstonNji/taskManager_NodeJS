require('dotenv').config()

const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_Secret
const bycryptjs = require('bcryptjs')

const userModel = require('../Model/userResitrationModel')

const register = async (req,res) => {
    const {username, email, password} = req.body

    const data = {
        username: username,
        email : email
    }

    if(!username || !email || !password){
        return res.send('enter valid credentials')
    }

    const user = await userModel.find(
        {email : email}
    )


    if(user.length > 0){
        return res.json({
            message: 'This user exists already'
        })
    }else{

        const hashedPassword = await bycryptjs.hash(password, 10)

        const newUser = await userModel.create({
            username,
            email,
            password: hashedPassword
        })

        res.json(newUser)
    }

    
}

const login = async (req,res) => {

    const {username, password} = req.body

    if(!username || !password){
        return res.send('enter valid credentials')
    }

    const user = await userModel.findOne({username})
    
    if(!user){
        return res.send("Couldn't find user, Register instead")
    }

    const isMatch = await bycryptjs.compare(password, user.password)

    if(!isMatch){
        return res.send('Invalid credentials')
    }

    const token = jwt.sign({username: username, userId:user._id }, jwtSecret, {expiresIn: '24h'} )

    console.log(token)

    return res.json(token)

}

module.exports = {
    register,
    login
}