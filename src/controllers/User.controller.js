import User from '../models/User'
import jwt from 'jsonwebtoken'

export const signIn = async (req, res) => {
    const userFound = await User.findOne({email: req.body.email})
    if(!userFound) return res.status(404).json({message: 'User not found :('})

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)
    if(!matchPassword) return res.status(401).json({token: null, message: "invalid password"})

    console.log(userFound)
    const token  = jwt.sign({id: userFound._id}, process.env.SECRET, {
        expiresIn: 172800
    })

    res.json({token})
}

export const getUsers = async (req, res) => {
    const user = await User.find()
    res.json(user)
}

export const signUp = async (req, res) => {
    const {username, email, password} = req.body
    const user = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    const savedUser = await user.save()
    const token  = jwt.sign({id: savedUser._id}, process.env.SECRET, {
        expiresIn: 172800
    })
    console.log(savedUser)

    res.json({token})
}