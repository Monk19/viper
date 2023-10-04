// const http = require("http");
const express = require("express");
const dbConnect = require("./model/mongodbConnection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./model/userModal");
const mongoose = require("mongoose");
const createUser = require("./controllers/userSignupController");
const app = express();
require("dotenv").config();
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //it parses incoming requests with json payloads
const hostName = process.env.hostName;
const port = process.env.PORT;
console.log(hostName, port);
const checkConnetion = dbConnect();
app.post("/signup", (req, res) => {
  console.log("Signup Details---->", req.body);
  let { userName, phoneNumber, password } = req.body;
  createUser(req.body).then((sucess) => {
    if (sucess) {
      res.status(200).send({ message: "user sucessfully created" });
    } else {
      res.status(500).send({ message: "user alreday exists" });
    }
  });
});
app.post("/login", (req, res) => {
  let { userName, password } = req.body;
  User.find({ name: userName }).then((result) => {
    console.log(result);
    try {
      bcrypt
        .compare(password.toString(), result[0].password)
        .then((check) => {
          console.log(check);
          if (!check) {
            return res.status(400).send({
              message: "Passwords does not match",
            });
          }
          const token = jwt.sign(
            {
              userId: "12",
              userName: "12",
            },
            "RANDOM-TOKEN",
            { expiresIn: 80 }
          );
          res.status(200).send({
            message: "Login Successful",
            email: result.email,
            token,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      res.status(500).send({ message: "Pl" });
    }
  });
});
app.get("/", (req, res) => {
  // console.log("Signup Details---->", req.data);
  res.end({ message: "Verifying login details" });
});
app.listen(port, () => {
  console.log(`Server is running at port http://${hostName}:${port}`);
});
// const server = http.createServer((req, res) => {
//   // console.log(req.url);
//   console.log(process.env.PORT);
//   res.statusCode = 200;
//   res.setHeader("Content-type", "text/plain");
//   res.end("Hello Server");
// });

// server.listen(port, hostName, () => {
//   console.log(`Server is running at port http://${hostName}:${port}`);
// });
