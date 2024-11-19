const mongoose = require("mongoose");;
const asyncHandler = require("express-async-handler");
require("dotenv").config;

//creating fn to connect db with mongoDB
const connectDB = asyncHandler(async()=>{
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Connected to the Database: ",
        connect.connection.host,
        connect.connection.name
    );
})

module.exports = connectDB;