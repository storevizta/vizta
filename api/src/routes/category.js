require('dotenv').config();

const router = require('express').Router();

const { getCategory, createCategory, deleteCategory } = require('../controller/categoryController.js');

router.get('/', getCategory);

router.post('/', createCategory);

router.delete('/:name', deleteCategory);

module.exports = router;
