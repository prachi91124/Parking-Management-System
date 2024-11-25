const constants = require('../constants');

const errorHandler = (err,req,res,next) =>{
    const statusCode = res.statusCode ? res.statusCode:500;

    switch(statusCode) {
        case constants.BAD_REQUEST:
            return res.status(statusCode).json({
                title:"Bad Request",
                message: err.message,
                stackTrace: err.stack
            });
        case constants.FORBIDDEN:
            return res.status(statusCode).json({
                title:"Forbidden",
                message: err.message,
                stackTrace: err.stack
            });
        case constants.NOT_FOUND:
            return res.status(statusCode).json({
                title:"Not Found",
                message: err.message,
                stackTrace: err.stack
            });
        case constants.PAYMENT_REQUIRED:
            return res.status(statusCode).json({
                title:"Payment Required",
                message: err.message,
                stackTrace: err.stack
            });
        case constants.SERVER_ERROR:
            return res.status(statusCode).json({
                title:"Server Error",
                message: err.message,
                stackTrace: err.stack
            });
        case constants.UNAUTHORIZED:
            return res.status(statusCode).json({
                title:"Unauthorized",
                message: err.message,
                stackTrace: err.stack
            });
        
            default:
                console.log("No error, all good!");
                return res.status(500).json({
                    title: "Internal Server Error",
                    message:"Something went wrong, please try again later.",
                    stackTrace: err.stack
                })
    }
};
module.exports = errorHandler;