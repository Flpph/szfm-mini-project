const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    admin: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model("User", UserScheme);