const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const {validateJwtToken} = require("../middleware/jwtAuthMiddleware");

const{
    registerUser,
    loginUser,
    getUserProfile
} = require("../controllers/userController");

router.post("/register",registerUser) ;

router.post("/login",loginUser);

router.get("/myaccount",getUserProfile);
=======

const{
    registerUser
} = require("../controllers/userController");

router.post("/register",registerUser);
>>>>>>> 2e47a2ba05df21828ac5353a0cbb28b01287f5fd

module.exports = router;