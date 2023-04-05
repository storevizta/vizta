require("dotenv").config();

const router = require("express").Router();

const {
  getUsers,
  getUsersById,
  getUsersAds,
  getUsersOrders,
  getUsersFavorites,
  getUsersRating,
} = require("../controller/usersController.js");

router.get("/");

router.get("/:id");

router.post("/");

router.put("/");

router.delete("/");

module.exports = router;
