require('dotenv').config();

const jwt = require('jsonwebtoken');

const key = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  const token = authHeader && authHeader.split(' ')[1];

  console.log(authHeader);

  if (!token) {
    return res.status(401).json({ message: 'Token required' });
  }

  jwt.verify(token, key, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

module.exports = { verifyToken };
