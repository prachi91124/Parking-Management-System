const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateJwtToken = (userData) => {
    if(!process.env.PRIVATE_KEY){
        throw new error("JWT private key is not defined in .env file");
    }
    return jwt.sign(userData,process.env.PRIVATE_KEY,{expiresIn:'1h'})
}

const validateJwtToken = (req,res,next) => {
    const authCheck = req.headers.authorization;
    if(!authCheck) return res.status(401).json({err:'Token is Unavailable'});

    const token = authCheck.split(" ")[1];
    if(!token){
        return res.status(401).json({err:'Invalid Token Format'});
    }
    try{
        const validatedToken = jwt.verify(token, process.env.PRIVATE_KEY);
        req.user = validatedToken;
        next();
    }catch(err){
        return res.status(401).json({error:"Token Verification Failed", message: err.message});
    }
}

module.exports = {generateJwtToken, validateJwtToken}