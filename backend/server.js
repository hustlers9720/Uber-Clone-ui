import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDb from './db/db.js'; // Ensure correct file extension
import userRouter from './routes/userRoute.js';
import cookieParser from 'cookie-parser';
import captainRouter from './routes/captainRoute.js';
import mapsRouter from './routes/mapsRoute.js';
const app = express();

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());
connectDb();

app.get('/', (req, res) => {
    res.send('Hello');
});


app.use('/users', userRouter)
app.use('/captains', captainRouter)
app.use('/maps', mapsRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
