const mongoose = require("mongoose");

const ImageScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Image", ImageScheme);