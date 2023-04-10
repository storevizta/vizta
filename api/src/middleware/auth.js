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

const authorize = (roles) => {
  return (req, res, next) => {
    console.log('User role:', req.user.role);
    console.log('Roles authorized:', roles);

    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: 'You do not have permission to perform this action' });
    }

    next(); // Debe llamar a next() si el usuario tiene el rol correcto
  };
};

module.exports = { verifyToken, authorize };
