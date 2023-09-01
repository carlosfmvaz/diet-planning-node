import MealInfo from "./entities/meal-info.entity.js";
import MealFood from "./entities/meal-food.entity.js";
import BaseError from "../../base-error.js";

export default class MealService {
  mealInfoRepository;
  mealFoodRepository;
  constructor(mealInfoRepository, mealFoodRepository) {
    this.mealInfoRepository = mealInfoRepository;
    this.mealFoodRepository = mealFoodRepository;
  }

  async create(mealToCreate) {
    const mealInfo = new MealInfo({ ...mealToCreate, user_id: 1 });
    const createdMealInfo = await this.mealInfoRepository.create(mealInfo);

    if (mealToCreate.meal_foods.length === 0)
      throw new BaseError("Missing foods field", 400);

    let mealFoodsArray = [];
    mealToCreate.meal_foods.forEach(async (food) => {
      const mealFood = new MealFood({
        ...food,
        meal_info_id: createdMealInfo.id,
      });
      mealFoodsArray.push(mealFood);
    });
    await this.mealFoodRepository.create(mealFoodsArray, createdMealInfo.id);
    return true;
  }
}
