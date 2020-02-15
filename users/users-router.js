const express = require("express");
const bcrypt = require("bcryptjs");

const db = require("./users-model");

const restricted = require("../middlewares/restricted");

const router = express.Router();

router.get("/users", async (req, res, next) => {
  try {
    const users = await db.find();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.post("/login", restricted(), async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await db.findBy({ username }).first();
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const saved = await db.add(req.body);
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
