const htppError = require("../handler/handlerError.js");

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

const getUsers = async (req, res) => {
  try {
  } catch (e) {
    htppError(res, e);
  }
};

const getUsersById = async (req, res) => {
  try {
  } catch (e) {
    htppError(res, e);
  }
};

const getUsersAds = async (req, res) => {
  try {
  } catch (e) {
    htppError(res, e);
  }
};

const getUsersOrders = async (req, res) => {
  try {
  } catch (e) {
    htppError(res, e);
  }
};

const getUsersFavorites = async (req, res) => {
  try {
  } catch (e) {
    htppError(res, e);
  }
};

const getUsersRating = async (req, res) => {
  try {
  } catch (e) {
    htppError(res, e);
  }
};

module.exports = {
  singUp,
  singIn,
  singOut,
  getUsers,
  getUsersById,
  getUsersAds,
  getUsersOrders,
  getUsersFavorites,
  getUsersRating,
};
