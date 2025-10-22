import express from 'express'
import { connectDB } from './config/db.js'
import notesRoute from './routes/notesRoute.js'
import { PREFIX_1 } from './resource/string.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const PORT= process.env.PORT || 5000;

const app = express();

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    res.send("Hello from server 1")
})

app.use(PREFIX_1, notesRoute)

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
    });
})

// 5 products (name, description, price, rating, category)