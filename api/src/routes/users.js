require("dotenv").config();

const router = require("express").Router();

const {
  singIn,
  singUp,
  singOut,
  getUsers,
  getUsersById,
  getUsersAds,
  getUsersOrders,
  getUsersFavorites,
  getUsersRating,
} = require("../controller/usersController.js");

router.post("/singin", singIn); /* http://localhost:3001/users/singin */

router.post("/singup", singUp); /* http://localhost:3001/users/singup */

router.post("/singout", singOut); /* http://localhost:3001/users/singout */

router.get("/"); /* http://localhost:3001/users/ */

router.get("/:id"); /* http://localhost:3001/users/ */

router.post("/"); /* http://localhost:3001/users/ */

router.put("/"); /* http://localhost:3001/users/ */

router.delete("/");

module.exports = router;
