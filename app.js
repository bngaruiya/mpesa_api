const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  res.send("Mpesa API in development");
});

module.exports = app;
