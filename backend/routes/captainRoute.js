import express from 'express'
const captainRouter = express.Router();
import { body } from 'express-validator'
import { captainRegister, loginCaptain, getCaptainProfile, logoutCaptain } from '../controllers/captainController.js';
import { authCaptain } from '../middlewares/auth.js';

captainRouter.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be 3 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be 3 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be 3 characters long'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle'),

], captainRegister)

captainRouter.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be 3 characters long'),

], loginCaptain)

captainRouter.get('/profile', authCaptain, getCaptainProfile)
captainRouter.get('/logout', authCaptain, logoutCaptain)
export default captainRouter