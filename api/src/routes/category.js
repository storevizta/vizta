require('dotenv').config();

const router = require('express').Router();

const { getCategory } = require('../controller/categoryController.js');

router.get('/', getCategory);

module.exports = router;
