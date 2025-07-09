require('dotenv').config()

const jwtSecret = process.env.JWT_Secret


const login = (req,res) => {
    const{username, password} = req.body

    if(!username && !password){
        res.send('Enter username and password')
    }else{
        res.json({
            message: 'Login sent',
            username: username,
            password: password
        })
    }

    jwt.sign({username}, )
}

const dashBoard = (req,res) => {
    const secretNumber = Math.floor(Math.random()*15)

    res.json({
        message: `Here is your secret number ${secretNumber }`
    })

}

module.exports = {
    login,
    dashBoard
}