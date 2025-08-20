import mongoose, { model } from "mongoose";

const { Schema } = mongoose;

const recipeSchema = new Schema({
    title: String,
    postedBy: String,
    likes: Number,
    date: {
        type: Date,
        default: Date.now(),
    },
});

const Recipe = mongoose.model("Recipe", recipeSchema);
export default Recipe;