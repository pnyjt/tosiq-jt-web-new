import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import notesRoute from './routes/notesRoute.js'
import { PREFIX_1 } from './resource/string.js';

dotenv.config()
const app = express();
app.use(express.json())
const PORT= process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send("Hello from server 1")
})

app.use(PREFIX_1, notesRoute)

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running at http://localhost:${PORT}`)
})