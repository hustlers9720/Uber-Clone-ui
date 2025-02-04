import express from 'express'
import { authUser } from '../middlewares/auth.js';
import { getCoordinates } from '../controllers/mapController.js';
import { query } from 'express-validator';

const mapsRouter = express.Router();

mapsRouter.get('/get-coordinate', query('address').isString().isLength({ min: 3 }),
    authUser, getCoordinates)

export default mapsRouter;