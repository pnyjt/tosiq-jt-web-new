// express, dotenv, mongoose, cors
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send("Hello from backend")
});

const roles = [
    {id: 101, rolename: "Super Admin"},
    {id: 102, rolename: "Admin"},
    {id: 103, rolename: "Vendor"},
    {id: 104, rolename: "User"}
]
app.get('/users', (req, res) => {
    res.send(roles)
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})