const ai = require("../connection");
const stringGenerator = require("../utils/utils");

const getRecipe = (req, res, next) => {
  const input = stringGenerator(req.body);
  ai.models
    .generateContent({
      model: "gemini-2.0-flash",
      contents: input,
    })
    .then((response) => {
      const responseText = response.text
        .trim()
        .replace(/^```json\s*/i, "")
        .replace(/```$/, "");
      return responseText;
    })
    .then((recipes) => {
      res.status(200).send(recipes);
    })
    .catch((err) => {
      return Promise.reject({ status: 500, msg: "Failed to get recipes" });
    });
};

module.exports = getRecipe;
