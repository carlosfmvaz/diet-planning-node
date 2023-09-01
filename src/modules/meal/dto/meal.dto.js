export default class CreateMealDTO {
    meal_number;
    meal_description;
    meal_time;
    meal_foods;

  constructor(data) {
    Object.assign(this, data);
  }
}
