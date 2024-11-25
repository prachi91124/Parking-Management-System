const express = require("express");
const router = express.Router();

const {validateJwtToken} = require("../middleware/jwtAuthMiddleware");

const{
    registerUser,
    loginUser,
    getUserProfile
} = require("../controllers/userController");

router.post("/register",registerUser) ;

router.post("/login",loginUser);

router.get("/myaccount",getUserProfile);


module.exports = router;