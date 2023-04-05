const router = require('express').Router();

const accounts = require('./accounts.js');

const product = require('./product.js');

router.use('/accounts', accounts); /* http://localhost:3001/accounts */

router.use('/product', product); /* http://localhost:3001/product */

module.exports = router;
