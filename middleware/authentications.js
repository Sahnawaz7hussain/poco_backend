const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.SECRET;

const Authentication = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (token) {
    const decoded = await jwt.verify(token, secret, (err, decoded) => {
      if (err) return res.json({ message: "Invalid token", err: err.message });
      if (decoded?.userId.length > 0) {
        req.body.userId = decoded.userId;
        next();
      } else {
        res.status(404).json({ message: "token Exprired" });
      }
    });
  } else {
    res.status(404).json({ msg: "User is not Authenticated" });
  }
};

module.exports = { Authentication };
