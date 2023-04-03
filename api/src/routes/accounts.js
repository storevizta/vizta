require("dotenv").config();

const router = require("express").Router();

const {
  singIn,
  singUp,
  singOut,
} = require("../controller/accountsController.js");

router.post("/singin", singIn); /* http://localhost:3001/accounts/singin */

router.post("/singup", singUp); /* http://localhost:3001/accounts/singup */

router.post("/singout", singOut); /* http://localhost:3001/accounts/singout */

module.exports = router;
