const { htppError } = require("../handler/handlerError.js");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const key = process.env.KEY || "secretkey";

const User = require("../database.js");

const singIn = (req, res) => {
  try {
  } catch (e) {
    htppError(res, e);
  }
};

const singUp = (req, res) => {
  try {
  } catch (e) {
    htppError(res, e);
  }
};

const singOut = (req, res) => {
  try {
  } catch (e) {
    htppError(res, e);
  }
};

module.exports = { singIn, singUp, singOut };
