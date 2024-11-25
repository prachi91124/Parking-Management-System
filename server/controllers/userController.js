const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const { generateJwtToken } = require("../middleware/jwtAuthMiddleware");

const registerUser = asyncHandler(async(req,res)=>{
    const{ownerName, phoneNo, passwd,role} = req. body;
    
    if(!ownerName, !phoneNo, !passwd, !role) {
        res.status(400);
        throw new Error("Please provide all fields");
    }

    const userExists = await User.findOne({phoneNo});
    if(userExists) {
        return res.status(400).json({message: "User already exists"});
    }

    const usr = await User.create({
        ownerName,
        phoneNo,
        passwd: await bcrypt.hash(passwd,12),
        role
    })
    res.status(201).json({message:"User Registered Successfully", usr});
})

const loginUser = asyncHandler(async(req,res)=>{
    const{phoneNo, passwd, role} = req.body;

    if(!phoneNo, !passwd, !role) {
        res.status(400);
        throw new Error("Please provide all fields");
    }

    const userExists = await User.findOne({phoneNo});
    if(!userExists){
        return res.status(401).json({message:"Invalid credentials"});
    }
    const passCheck = await bcrypt.compare(passwd,userExists.passwd);
    if(!passCheck){
        res.status(401).json({message:"Invalid credentials"});
    }
    const token = generateJwtToken({id:userExists._id,phoneNo: userExists.phoneNo});

    res.status(200).json({message:"Login Successful",token});
})
module.exports = {
    registerUser,
    loginUser
};