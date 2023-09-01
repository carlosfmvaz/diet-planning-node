import BaseError from "../../../base-error.js";

export default class MealInfo {
    meal_number;
    meal_description;
    meal_time;
    user_id;

    constructor(mealInfo) {
        if (!mealInfo.meal_number) throw new BaseError('Missing meal_number field', 400);
        if (!mealInfo.meal_description) throw new BaseError("Missing meal_description field", 400);
        if (!mealInfo.meal_time) throw new BaseError("Missing meal_time field", 400);
        if (!mealInfo.user_id) throw new BaseError("Missing user_id field", 400);

        Object.assign(this, mealInfo);
    }
}