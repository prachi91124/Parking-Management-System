const express = require("express");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");

//if .env file is not accesible
if (dotenv.error) {
    console.error("Error loading .env file", dotenv.error);
}

//To connect to MongoDB
connectDB();

//error Handling Middleware
app.use(errorHandler);

//routes
app.use('/api',require("./routes/userRoutes"));
const port = 6000;
app.listen(port, () => {
    console.log(`Booting on http://localhost:${port}`);
});
