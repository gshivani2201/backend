const express = require("express");

const feedController = require("../controllers/feed");

const router = express.Router();

router.get("/products", feedController.getPosts);

module.exports = router;
