import BaseError from "../../../base-error.js";

export default class MealFood {
  food_name;
  quantity_in_grams;
  quantity_in_units;
  meal_info_id;

  constructor(mealFoodInfo) {
    if (!mealFoodInfo.food_name)
      throw new BaseError("Missing food_name field", 400);

    if (!mealFoodInfo.hasOwnProperty("quantity_in_grams") || !mealFoodInfo.hasOwnProperty("quantity_in_units"))
      throw new BaseError("Missing quantity_in_grams or quantity_in_units field", 400);
    
    if (!mealFoodInfo.quantity_in_grams && !mealFoodInfo.quantity_in_units)
      throw new BaseError("Quantity_in_grams or quantity_in_units must be provided", 400);

    if (mealFoodInfo.quantity_in_grams != null && mealFoodInfo.quantity_in_units != null)
        throw new BaseError("You cannot provide both quantities, you must choose only one", 400);
    
    if (!mealFoodInfo.hasOwnProperty("quantity_in_grams"))
      throw new BaseError("Missing quantity_in_grams field", 400);

    if (!mealFoodInfo.hasOwnProperty("quantity_in_units"))
      throw new BaseError("Missing quantity_in_units field", 400);

    if (!mealFoodInfo.meal_info_id)
      throw new BaseError("Missing meal_info_id field", 400);

    Object.assign(this, mealFoodInfo);
  }
}
