const express = require("express");
const app = express();
const cors = require("cors");
const getRecipe = require("./gemini/controllers/recipe.controller");

app.use(express.json());
app.use(cors());

app.post("/api/generate-recipe", getRecipe)

app.all("/*splat", (req, res) => {
    res.status(404).send({ msg: "Not Found!" })
});

module.exports = app;
