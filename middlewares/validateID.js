const db = require("../data/db.config");

async function validateID(req, res, next) {
  try {
    const user = await db("users")
      .where("id", req.params.id)
      .first();
    res.json(user);
  } catch (err) {
    next(`No user found with the id of ${req.params.id}`);
  }
}

module.exports = validateID;
