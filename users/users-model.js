const db = require("../data/db.config");
const bcrypt = require("bcryptjs");

function find() {
  return db("users").select();
}

function findBy(filter) {
  return db("users")
    .select("id", "username", "password")
    .where(filter);
}

function findByID(id) {
  return db("users")
    .where({ id })
    .first("id", "username");
}

async function add(user) {
  user.password = await bcrypt.hash(user.password, 12);
  const [id] = await db("users").insert(user);
  return findByID(id);
}

function remove(id) {
  return db("users")
    .where({ id })
    .del();
}

module.exports = {
  find,
  findByID,
  add,
  remove,
  findBy
};
