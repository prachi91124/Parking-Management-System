const express = require("express");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");

//if .env file is not accesible
if (!process.env.CONNECTION_STRING) {
    console.error("Error: .env file is not accessible or missing variables");
    process.exit(1); // Exit the app
}

//To connect to MongoDB
connectDB();

app.use(express.json());
app.use(cors());

//error Handling Middleware
app.use(errorHandler);

//get route
app.get("/api/register",(req,res)=>{
    res.status(200).send("Welcome to TVA")
})
//register route
app.use("/api/user",require("./routes/userRoutes"));

const port = 8000;
app.listen(port, () => {
    console.log(`Booting on http://localhost:${port}`);
});
