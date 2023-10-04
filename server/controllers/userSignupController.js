const bcrypt = require("bcrypt");
const User = require("../model/userModal");
const mongoose = require("mongoose");
const createUser = async (userData) => {
  let { userName, phoneNumber, password } = userData;
  return bcrypt
    .hash(password.toString(), 10)
    .then((hased) => {
      console.log(hased, mongoose.connection.readyState);
      const user = new User({
        name: userName,
        phone: phoneNumber,
        password: hased,
      });
      return user
        .save()
        .then((result) => {
          console.log("user created", result);
          return true;
        })
        .catch((err) => {
          console.log(err);
          return false;
        });
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
module.exports = createUser;
