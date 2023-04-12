require('dotenv').config();

const jwt = require('jsonwebtoken');

const key = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  const token = authHeader && authHeader.split(' ')[1];

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

const authorize = (roles) => {
  return (req, res, next) => {
    console.log('User role:', req.user.role);
    console.log('Roles authorized:', roles);

    const response = roles.filter((value) => value === req.user.role);

    if (!response.length) {
      res.status(400).json('you do not have permission');
    } else {
      next(); // Debe llamar a next() si el usuario tiene el rol correcto
    }
  };
};

module.exports = { verifyToken, authorize };
