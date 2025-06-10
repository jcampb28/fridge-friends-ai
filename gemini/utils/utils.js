const stringGenerator = (input) => {
  let inputString = `You are a helpful recipe API.
                    Using only these available ingredients: ${input.ingredients.join(
                      ", "
                    )}, return exactly three recipes:
                    - One quick and easy recipe,
                    - One moderately difficult recipe,
                    - One advanced recipe requiring more time or skill.
                    Ingredients can be reused. Do not give dessert recipies.
                    I have ${input.cookTime} to cook; please ensure you stick to this time`;
  const formattingInstructions = `
                    Respond only with raw JSON in exactly the following format:
                    {
                    “recipes”: [
                        {
                        “title”: “string”,
                        “ingredients”: [
                            {
                            “name”: “string”,
                            “quantity”: {
                                “metric”: { “amount”: number, “unit”: “string” },
                                “imperial”: { “amount”: number, “unit”: “string” }
                            }
                            }
                        ],
                        "cookingTime": "string",
                        “method”: [“step 1”, “step 2", “...“]
                        }
                    ]
                    }
                    Do not include any explanation, markdown, or formatting like backticks — only return raw JSON.
                    `;
  if (input.allergies && !input.dietaryRequirements) {
    inputString =
      inputString +
      ` Do not include any of these ingredients: ${input.allergies}.` +
      formattingInstructions;
    return inputString;
  } else if (input.allergies && input.dietaryRequirements) {
    inputString =
      inputString +
      ` Do not include any of these ingredients: ${input.allergies}.
        Take these dietary requirements into account: ${input.dietaryRequirements}.` +
      formattingInstructions;
    return inputString;
  } else if (input.dietaryRequirements && !input.allergies) {
    inputString =
      inputString +
      `Take these dietary requirements into account: ${input.dietaryRequirements}.` +
      formattingInstructions;
    return inputString;
  } else {
    inputString = inputString + formattingInstructions;
    console.log(inputString)
    return inputString;
  }
};

module.exports = stringGenerator;
