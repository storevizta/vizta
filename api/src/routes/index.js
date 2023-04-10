const router = require('express').Router();

const admin = require('./admin.js');

const ads = require('./ads.js');

const auth = require('./auth.js');

const users = require('./users.js');

router.use('/admin', admin);

router.use('/ads', ads);

router.use('/auth', auth);

router.use('/users', users);

module.exports = router;
