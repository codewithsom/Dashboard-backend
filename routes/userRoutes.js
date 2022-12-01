import express from 'express'
import { login,register,allUser } from '../controllers/authController.js'
const userRoutes =express.Router() 

userRoutes.get('/',allUser)
userRoutes.post('/login',login)
userRoutes.post('/register',register)

export default userRoutes