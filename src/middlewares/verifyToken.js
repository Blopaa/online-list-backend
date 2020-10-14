import jwt from 'jsonwebtoken'
import User from '../models/User'

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["auth-token"]
        if(!token) return res.status(400).json({message: "no token provided"})

        const decoded  = jwt.verify(token, process.env.SECRET)
        req.userId = decoded.id

        const user = await User.findById(req.userId, {password: 0})
        if(!user) return res.status(500).json({message: "user not found"})
        next()
    } catch (error) {
        return res.status(401).json({message: "unathorized"})
    }
}