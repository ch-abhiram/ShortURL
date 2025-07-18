
const mongoose = require("mongoose");

require('dotenv').config();

async function connectToMongoDB() {
    const url = process.env.MONGO_URI;
    if (!url) {
        throw new Error("MONGO_URI not set in environment variables.");
    }
    return mongoose.connect(url);
}

module.exports = {
    connectToMongoDB,
}
