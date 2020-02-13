const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(helmet());
server.use(cors());

//test route
server.get("/", (req, res) => {
  res.send("<h3>It's Alive!</h3>");
});

//error handling
server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong!"
  });
});

module.exports = server;
