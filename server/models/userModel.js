const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        ownerName: {
            type: String,
            required: [true,"Please enter your name"],
            maxlength:64
        },
        phoneNo: {
            type: Number,
            required:[true, "Please enter your Phone  Number"],
            validate: {
                validator : (value) => /^[0-9]{10}$/.test(value),
                message:"Phone Number must be 10 digits long"
            }
        },
        passwd: {
            type: String,
            required: [true, "Please enter your password"],
            minlength:8,
            maxlength:64
        },
        role: {
            type: String,
            required: [true, "Please select your role"],
            enum:{
                values: ["admin","user"],
                message:"Role must be either 'admin' or 'user'"
            },
            default:"user"
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;