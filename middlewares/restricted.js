function restricted() {
  const authError = {
    message: "You shall not pass!"
  };

  return (req, res, next) => {
    if (!req.session || !req.session.user) {
      return res.status(401).json(authError);
    }
    next();
  };
}

module.exports = restricted;
