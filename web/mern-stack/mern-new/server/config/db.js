import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        console.log("Database is connecting...")
        const db = await mongoose.connect(process.env.MONGODB_LOCAL);
        if (db) {
            console.log("Database connected: ", db.connection.host)
        } else {
            console.log("Could'n connect to database")
        }
    } catch (error) {
        console.log("====> Something went wrong: ", error)
    }
}