const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const feedRoutes = require("./routes/feed");

const app = express();

// app.use(bodyParser.urlencoded); // x-www-form-urlencoded  <form></form>
app.use(bodyParser.json()); // application.json()
app.use("/images", express.static(path.join(__dirname, "images")));

//before sending any response, set headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// GET /feed/products
app.use("/feed", feedRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

mongoose
  .connect(
    "mongodb+srv://node-shivani:iJX1XgSGr6nprkn4@cluster0.fc5jdgf.mongodb.net/posts"
  )
  .then((result) => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));
