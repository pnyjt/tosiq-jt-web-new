// express, dotenv, nodemon, mongoose, cors
import express from 'express';
import dotenv from 'dotenv';
import commonRoute from './routes/commonRoute.js';
import { connectDB } from './config/db.js';
import notesRoute from './routes/notesRoute.js';
import cors from 'cors'

dotenv.config();


const PORT = process.env.PORT || 5000;
const PREFIX = '/api/v1'
const app = express();
app.use(express.json());
app.use(cors())

app.use('/', commonRoute)
app.use(PREFIX + '/notes', notesRoute)


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    })
})