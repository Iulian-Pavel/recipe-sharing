require("dotenv").config();

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const utils = require("./utils");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("default route");
});

app.post("/sign-in", (req, res) => {
  const { username, password } = req.body;
  console.log(`received form details ${username}, ${password}`);
  if (!utils.checkCredentials(username, password)) {
    res.status(403).json({ errorMessage: "Credentials are too short!" });
  } else {
    const accessToken = jwt.sign(username, process.env.ACCESS_TOKEN_SECRET);
    res.status(200).json({
      message: "Authorization succesfull!",
      accessToken: accessToken,
    });
  }
});

app.listen(PORT, () => {
  console.log("server is running");
});
