const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('db connected');

    } catch(error) {
        console.log('error...', error.message)
    }
};

module.exports = connectDB;