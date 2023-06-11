const express = require("express");

const feedController = require("../controllers/feed");

const router = express.Router();

router.get("/products", feedController.getProducts);

router.post("/product", feedController.createProduct);

module.exports = router;
