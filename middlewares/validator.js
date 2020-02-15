module.exports = prop => (req, res, next) => {
  req.body[prop]
    ? next()
    : res.status(400).json({ message: `${prop} is required.` });
};
