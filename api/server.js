const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const userRouter = require("../users/users-router");
const session = require("express-session");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(helmet());
server.use(cors());
const sessionConfig = {
  name: "banana",
  resave: false,
  saveUninitialized: false,
  secret: "Keep it secret, keep it safe!",
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    secure: false
  }
};
server.use(session(sessionConfig));

server.use("/api", userRouter);

//test route
server.get("/", (req, res) => {
  res.send("<h3>It's Alive!</h3>");
});

//error handling
server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong!",
    error: err.message
  });
});

module.exports = server;
