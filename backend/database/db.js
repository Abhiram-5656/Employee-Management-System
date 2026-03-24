// const mongoose = require('mongoose');
// require('dotenv').config();
// const MONGODB_URL = process.env.MONGODB_LINK

// const connectDb = async () => {
//     try {
//         await mongoose.connect(MONGODB_URL);
//         console.log(`MongoDb server connected ${mongoose.connection.host}`)
//     } catch (error) {
//         console.log(`MongoDb server not connected ${error}`)
//     }
// }

// module.exports = connectDb


const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URL = process.env.MONGODB_LINK;

const connectDb = async () => {
  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected:", mongoose.connection.name);
  } catch (error) {
    console.log("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDb;