const mongoose = require("mongoose");
require("dotenv").config;
async function dbConnect() {
  mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING, {
      //   these are options to ensure that the connection is done properly
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useCreateIndex: true,
    })
    .then(() => {
      console.log("Connection established with mongodb atlas");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConnect;
