require('dotenv').config();

const router = require('express').Router();

const {} = require('../controller/adsController.js');

router.get('/');

router.get('/:id');

router.post('/');

module.exports = router;
