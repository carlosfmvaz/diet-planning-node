import InMemoryMealFoodRepository from "../../repositories/in-memory/meal-food.repository.js";
import InMemoryMealInfoRepository from "../../repositories/in-memory/meal-info.repository.js";
import MealController from "./meal.controller.js";
import MealService from "./meal.service.js";

export default function mealFactory() {
  const mealInfoRepository = new InMemoryMealInfoRepository();
  const mealFoodRepository = new InMemoryMealFoodRepository();

  const mealService = new MealService(mealInfoRepository, mealFoodRepository);
  const mealController = new MealController(mealService);
  return mealController;
}
