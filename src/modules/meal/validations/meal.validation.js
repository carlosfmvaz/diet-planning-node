import Joi from "joi";

export const createMealValidation = Joi.object({
  meal_number: Joi.number().required(),
  meal_description: Joi.string().required(),
  meal_time: Joi.string().required(),
  meal_foods: Joi.array().items(
    Joi.object({
      food_name: Joi.string().required(),
      quantity_in_grams: Joi.required(),
      quantity_in_units: Joi.required(),
    })
  ).required(),
});
