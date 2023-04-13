require('dotenv').config();

const router = require('express').Router();

const { verifyToken, authorize } = require('../middleware/auth.js');

const {} = require('../controller/reportController.js');

module.exports = router;
