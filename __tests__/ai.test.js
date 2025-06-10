const ai = require("../gemini/connection");
const data = require("../gemini/ingredients");
const app = require("../app");
const request = require("supertest");

describe("POST string", () => {
  test("returns any response when provided with any input", () => {
    const input = { input: "please send a response" };
    return request(app)
      .post("/api/generate-recipe")
      .send(input)
      .expect(200)
      .then((response) => {
        expect(response.body).not.toBe(null);
      });
  }, 15000);
});

describe.only("POST recipe instructions", () => {
  test("accepts allergy info", () => {
    const input = {
      allergies: "peanuts, seafood",
      //dietaryRequirements: "vegetarian",
      ingredients: data,
    };
    return request(app)
      .post("/api/generate-recipe")
      .send(input)
      .expect(200)
      .then((response) => {
        expect(response.body).not.toBe(null);
      });
  }, 15000);
  test("accepts dietary requirements info", () => {
    const input = {
      //allergies: "peanuts, seafood",
      dietaryRequirements: "vegetarian",
      ingredients: data,
    };
    return request(app)
      .post("/api/generate-recipe")
      .send(input)
      .expect(200)
      .then((response) => {
        expect(response.body).not.toBe(null);
      });
  }, 15000);
  test("accepts dietary requirements and allergy info", () => {
    const input = {
      allergies: "peanuts, seafood",
      dietaryRequirements: "vegetarian",
      ingredients: data,
    };
    return request(app)
      .post("/api/generate-recipe")
      .send(input)
      .expect(200)
      .then((response) => {
        expect(response.body).not.toBe(null);
      });
  }, 15000);
  test.only("accepts input with only ingredients", () => {
    const input = {
      ingredients: data,
      cookTime: "< 15 min"
    };
    return request(app)
      .post("/api/generate-recipe")
      .send(input)
      .expect(200)
      .then((response) => {
        console.log(response.text)
        expect(response.text).not.toBe(null);
      });
  }, 15000);
});
