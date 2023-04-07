const passport = require('passport');

const { User } = require('../database.js');

const singUp = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    const user = await User.create({ name, username, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const singIn = async (req, res) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: info.message });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.json(user);
    });
  })(req, res, next);
};

module.exports = { singUp, singIn };
