const express = require("express");
const bodyParser = require("body-parser");

const feedRoutes = require("./routes/feed");

const app = express();

// app.use(bodyParser.urlencoded); // x-www-form-urlencoded  <form></form>
app.use(bodyParser.json()); // application.json()

//before sending any response, set headers
app.use((req, res, next) => {
  res.setHeader("Acess-Control-Allow-Origin", "*");
  res.setHeader("Acess-Control-Allow-Methods", "GET, POST");
  res.setHeader("Acess-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// GET /feed/products
app.use("/feed", feedRoutes);

app.listen(8080);
