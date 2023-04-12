require('dotenv').config();

const router = require('express').Router();

const { verifyToken, authorize } = require('../middleware/auth.js');

const {} = require('../controller/ratingController.js');

module.exports = router;
