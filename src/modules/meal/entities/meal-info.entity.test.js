import MealInfo from "./meal-info.entity.js";

describe("MealInfoEntity test suite", () => {
  it("should fail if meal_number is missing", () => {
    const mealInfoToCreate = {
      meal_description: "Breakfast",
      meal_time: "08:00",
      user_id: 1,
    };
    expect(() => new MealInfo(mealInfoToCreate)).toThrow(
      "Missing meal_number field"
    );
  });

  it("should fail if meal_description is missing", () => {
    const mealInfoToCreate = {
      meal_number: 1,
      meal_time: "08:00",
      user_id: 1,
    };
    expect(() => new MealInfo(mealInfoToCreate)).toThrow(
      "Missing meal_description field"
    );
  });

  it("should fail if meal_time is missing", () => {
    const mealInfoToCreate = {
      meal_number: 1,
      meal_description: "Breakfast",
      user_id: 1,
    };
    expect(() => new MealInfo(mealInfoToCreate)).toThrow(
      "Missing meal_time field"
    );
  });

  it("should fail if user_id is missing", () => {
    const mealInfoToCreate = {
      meal_number: 1,
      meal_description: "Breakfast",
      meal_time: "08:00",
    };
    expect(() => new MealInfo(mealInfoToCreate)).toThrow(
      "Missing user_id field"
    );
  });

  it("should create a meal info object", () => {
    const mealInfoToCreate = {
      meal_number: 1,
      meal_description: "Breakfast",
      meal_time: "08:00",
      user_id: 1,
    };
    const mealInfo = new MealInfo(mealInfoToCreate);
    expect(mealInfo).toEqual(mealInfoToCreate);
  });
});
