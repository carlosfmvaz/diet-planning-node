import MealController from "./meal.controller.js";
import MealService from "./meal.service.js";
import InMemoryMealFoodRepository from "../../repositories/in-memory/meal-food.repository.js";
import InMemoryMealInfoRepository from "../../repositories/in-memory/meal-info.repository.js";
import BaseError from "../../base-error.js";

describe("MealController test suite", () => {
  let mealController;
  let responseMock;
  beforeAll(() => {
    const mealFoodRepository = new InMemoryMealFoodRepository();
    const mealInfoRepository = new InMemoryMealInfoRepository();

    const mealService = new MealService(mealInfoRepository, mealFoodRepository);
    mealController = new MealController(mealService);
  });

  beforeEach(() => {
    responseMock = {
      status: jest.fn(() => responseMock),
      json: jest.fn(),
    };
  });

  it("should fail if any parameter are missing", () => {
    const requestMock = {
      body: {
        meal_description: "Breakfast",
        meal_time: "08:00",
        meal_foods: [
          {
            food_name: "Banana",
            quantity_in_grams: 100,
            quantity_in_units: "",
          },
        ],
      },
    };
    const next = jest.fn();

    mealController.create(requestMock, responseMock, next);
    expect(next).toBeCalledWith(
      new BaseError('"meal_number" is required', 400)
    );

    requestMock.body = {
      meal_number: 1,
      meal_time: "08:00",
      meal_foods: [
        {
          food_name: "Banana",
          quantity_in_grams: 100,
          quantity_in_units: "",
        },
      ],
    };
    mealController.create(requestMock, responseMock, next);
    expect(next).toBeCalledWith(
      new BaseError('"meal_description" is required', 400)
    );

    requestMock.body = {
      meal_number: 1,
      meal_description: "Breakfast",
      meal_foods: [
        {
          food_name: "Banana",
          quantity_in_grams: 100,
          quantity_in_units: "",
        },
      ],
    };
    mealController.create(requestMock, responseMock, next);
    expect(next).toBeCalledWith(new BaseError('"meal_time" is required', 400));

    requestMock.body = {
      meal_number: 1,
      meal_description: "Breakfast",
      meal_time: "08:00",
    };
    mealController.create(requestMock, responseMock, next);
    expect(next).toBeCalledWith(new BaseError('"meal_foods" is required', 400));

    requestMock.body = {
      meal_number: 1,
      meal_description: "Breakfast",
      meal_time: "08:00",
      meal_foods: [
        {
          quantity_in_grams: 100,
          quantity_in_units: "",
        },
      ],
    };
    mealController.create(requestMock, responseMock, next);
    expect(next).toBeCalledWith(
      new BaseError('"meal_foods[0].food_name" is required', 400)
    );

    requestMock.body = {
      meal_number: 1,
      meal_description: "Breakfast",
      meal_time: "08:00",
      meal_foods: [
        {
          food_name: "Banana",
        },
      ],
    };
    mealController.create(requestMock, responseMock, next);
    expect(next).toBeCalledWith(
      new BaseError('"meal_foods[0].quantity_in_grams" is required', 400)
    );
  });

  it("should create a meal", async () => {
    const requestMock = {
      body: {
        meal_number: 1,
        meal_description: "Breakfast",
        meal_time: "08:00",
        meal_foods: [
          {
            food_name: "Banana",
            quantity_in_grams: 100,
            quantity_in_units: null,
          },
        ],
      },
    };
    const next = jest.fn();

    await mealController.create(requestMock, responseMock, next);
    expect(responseMock.json).toHaveBeenCalledWith({
      message: "Meal created successfully",
    });
  });
});
