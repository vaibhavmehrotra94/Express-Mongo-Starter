const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
  .connect("mongodb://mongo:27017/docker-node-mongo", { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(PORT, () => `Server running on port ${PORT}`);
