const { htppError } = require("../handler/handlerError.js");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const key = process.env.KEY || "secretkey";

const singUp = async (req, res) => {
  try {
  } catch (e) {
    htppError(res, e);
  }
};

const singIn = async (req, res) => {
  try {
  } catch (e) {
    htppError(res, e);
  }
};

const singOut = async (req, res) => {
  try {
  } catch (e) {
    htppError(res, e);
  }
};

module.exports = { singIn, singUp, singOut };
