const mongoose = require("mongoose");

const ImageScheme = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    path: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Image", ImageScheme);