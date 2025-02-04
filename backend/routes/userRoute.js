import express from 'express'
const userRouter = express.Router()
import { body } from 'express-validator'
import { registerUser, loginUser, getUserProfile, logoutUser } from '../controllers/userController.js'
import {authUser} from '../middlewares/auth.js'


userRouter.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be 3 characters long')
], registerUser)


userRouter.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be 3 characters long')
], loginUser)

userRouter.get('/profile', authUser, getUserProfile)
userRouter.get('/logout', authUser, logoutUser)

export default userRouter