import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import { hasValidCredentials } from "./utils.js";

import { connectDB } from "./connection.js";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send("default route");
});

app.post("/sign-in", (req, res) => {
  const { username, password } = req.body;
  console.log(`received form details ${username}, ${password}`);
  if (!hasValidCredentials(username, password)) {
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
  console.log("Server running on port", PORT);
})