const stringGenerator = (input) => {
  let inputString = `You are a helpful recipe API.
                    ${input.onlyInventory}: ${input.ingredients.join(
                      ", "
                    )}, return exactly three recipes, making sure all of the recipes are proper meals, based on recipes from top chefs and restaurants:
                    - One quick and easy recipe,
                    - One moderately difficult recipe,
                    - One advanced, gourmet recipe requiring more skill. 
                    Ingredients can be reused. Do not give dessert recipes.
                    VERY IMPORTANT: I have ${input.cookTime} to cook; the recipe MUST NOT take longer than this to cook!!!!!!
                    Make sure the method is thorough and foolproof.`;
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
      ` Do not include any ingredients containing the following allergens: ${input.allergies}.` +
      formattingInstructions;
    return inputString;
  } else if (input.allergies && input.dietaryRequirements) {
    inputString =
      inputString +
      ` Do not include any ingredients containing the following allergens: ${input.allergies}.
        The recipe should be suitable for someone with these dietary requirements: ${input.dietaryRequirements}.` +
      formattingInstructions;
    return inputString;
  } else if (input.dietaryRequirements && !input.allergies) {
    inputString =
      inputString +
      `The recipe should be suitable for someone with these dietary requirements: ${input.dietaryRequirements}.` +
      formattingInstructions;
    return inputString;
  } else {
    inputString = inputString + formattingInstructions;
    console.log(inputString)
    return inputString;
  }
};

module.exports = stringGenerator;
