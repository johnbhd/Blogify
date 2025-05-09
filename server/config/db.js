import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();
const uri = process.env.DB_URI;
const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("MongoDB connected");
    } catch (error) {
        console.log('error: ', error);
    }
}


export default connectDB;