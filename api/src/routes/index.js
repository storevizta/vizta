const router = require("express").Router();

const auth = require("./auth.js");

const product = require("./product.js");

router.use("/auth", auth);

router.use("/product", product);

module.exports = router;
