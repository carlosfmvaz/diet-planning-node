import MealFood from "./meal-food.entity.js";

describe("MealFoodEntity test suite", () => {
  it("should fail if food_name is missing", () => {
    const mealFoodToCreate = {
      quantity_in_grams: 100,
      quantity_in_units: null,
    };
    expect(() => new MealFood(mealFoodToCreate)).toThrow(
      "Missing food_name field"
    );
  });

  it("should fail if quantity_in_grams is missing", () => {
    const mealFoodToCreate = {
      food_name: "Banana",
      quantity_in_units: null,
    };
    expect(() => new MealFood(mealFoodToCreate)).toThrow(
      "Missing quantity_in_grams or quantity_in_units field"
    );
  });

  it("should fail if quantity_in_units is missing", () => {
    const mealFoodToCreate = {
      food_name: "Banana",
      quantity_in_grams: 100,
    };
    expect(() => new MealFood(mealFoodToCreate)).toThrow(
      "Missing quantity_in_grams or quantity_in_units field"
    );
  });

  it("should fail if meal_info_id is missing", () => {
    const mealFoodToCreate = {
      food_name: "Banana",
      quantity_in_grams: 100,
      quantity_in_units: null,
    };
    expect(() => new MealFood(mealFoodToCreate)).toThrow(
      "Missing meal_info_id field"
    );
  });

  it("should create a meal food object", () => {
    const mealFoodToCreate = {
      food_name: "Banana",
      quantity_in_grams: 100,
      quantity_in_units: null,
      meal_info_id: 1,
    };
    const mealFood = new MealFood(mealFoodToCreate);
    expect(mealFood).toEqual(mealFoodToCreate);
  });
});
