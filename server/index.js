import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import utils from "./utils.js";
import mongoose from "mongoose";
import RecipeModal from "./model/RecipeModal.js";

const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@recipewebsite.xr2msjj.mongodb.net/`;

const DB_CONNECTION = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("connected to database");
  } catch (error) {
    console.log("Error connecting to database: ", error);
  }
};

DB_CONNECTION();

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
    utils.explode();
  } else {
    const accessToken = jwt.sign(username, process.env.ACCESS_TOKEN_SECRET);
    res.status(200).json({
      message: "Authorization succesfull!",
      accessToken: accessToken,
    });
  }
});

app.post("/upload-recipe", async (req, res) => {
  const { title, postedBy, likes } = req.body;
  try {
    const recipe = new RecipeModal({
      title: title,
      postedBy: postedBy,
      likes: likes,
    });
    await recipe.save();
    res.send("Recipe saved succesfull")
  } catch (error) {
    res.send("Error saving object: ", error);
  }
});

app.listen(PORT, () => {
  console.log("server is running");
});
