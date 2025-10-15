import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_LOCAL);

        if (db) {
            console.log(`Database is connected: ${db.connection.host}`)
        } else {
            console.log("Error: Database isn't connected")
        }
    } catch (err) {
        console.log(`Something went wrong: ${err}`)
    }
}