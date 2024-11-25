<<<<<<< HEAD
const constants = require('../constants');
=======
const {constants} = require('../constants');
>>>>>>> 2e47a2ba05df21828ac5353a0cbb28b01287f5fd

const errorHandler = (err,req,res,next) =>{
    const statusCode = res.statusCode ? res.statusCode:500;

    switch(statusCode) {
        case constants.BAD_REQUEST:
<<<<<<< HEAD
            return res.status(statusCode).json({
=======
            res.json({
>>>>>>> 2e47a2ba05df21828ac5353a0cbb28b01287f5fd
                title:"Bad Request",
                message: err.message,
                stackTrace: err.stack
            });
<<<<<<< HEAD
        case constants.FORBIDDEN:
            return res.status(statusCode).json({
=======
            break;
        case constants.FORBIDDEN:
            res.json({
>>>>>>> 2e47a2ba05df21828ac5353a0cbb28b01287f5fd
                title:"Forbidden",
                message: err.message,
                stackTrace: err.stack
            });
        case constants.NOT_FOUND:
<<<<<<< HEAD
            return res.status(statusCode).json({
=======
            res.json({
>>>>>>> 2e47a2ba05df21828ac5353a0cbb28b01287f5fd
                title:"Not Found",
                message: err.message,
                stackTrace: err.stack
            });
        case constants.PAYMENT_REQUIRED:
<<<<<<< HEAD
            return res.status(statusCode).json({
=======
            res.json({
>>>>>>> 2e47a2ba05df21828ac5353a0cbb28b01287f5fd
                title:"Payment Required",
                message: err.message,
                stackTrace: err.stack
            });
        case constants.SERVER_ERROR:
<<<<<<< HEAD
            return res.status(statusCode).json({
=======
            res.json({
>>>>>>> 2e47a2ba05df21828ac5353a0cbb28b01287f5fd
                title:"Server Error",
                message: err.message,
                stackTrace: err.stack
            });
        case constants.UNAUTHORIZED:
<<<<<<< HEAD
            return res.status(statusCode).json({
=======
            res.json({
>>>>>>> 2e47a2ba05df21828ac5353a0cbb28b01287f5fd
                title:"Unauthorized",
                message: err.message,
                stackTrace: err.stack
            });
<<<<<<< HEAD
        
            default:
                console.log("No error, all good!");
                return res.status(500).json({
                    title: "Internal Server Error",
                    message:"Something went wrong, please try again later.",
                    stackTrace: err.stack
                })
=======
            
            default:
                console.log("No error, all good!");
                 break;
>>>>>>> 2e47a2ba05df21828ac5353a0cbb28b01287f5fd
    }
};
module.exports = errorHandler;