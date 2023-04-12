require('dotenv').config();

const router = require('express').Router();

const { verifyToken, authorize } = require('../middleware/auth.js');

const { getCategory } = require('../controller/categoryController.js');

router.get('/', getCategory);

module.exports = router;
