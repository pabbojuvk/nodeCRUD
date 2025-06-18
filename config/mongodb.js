const { default: mongoose } = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        if(connection){
            console.log("MangoDB... connected")
        }
    } catch (error) {
        console.log("failed connection____", error?.message);
        return;
    }
};

module.exports = connectDB;