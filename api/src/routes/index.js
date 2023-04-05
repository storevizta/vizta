const router = require('express').Router();

const ads = require('./ads.js');

const users = require('./users.js');

router.use('/ads', ads);

router.use('/users', users); /* http://localhost:3001/product */

module.exports = router;
