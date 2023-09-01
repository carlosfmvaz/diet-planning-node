import BaseError from "../../base-error.js";
import CreateMealDTO from "./dto/meal.dto.js";
import { createMealValidation } from "./validations/meal.validation.js";

export default class MealController {
  mealService;
  constructor(mealService) {
    this.mealService = mealService;
  }

  async create(req, res, next) {
    try {
      const { body } = req;
      const { error } = createMealValidation.validate(body);
      if (error) {
        throw new BaseError(error.details[0].message, 400);
      }
      
      const mealToCreate = new CreateMealDTO(body);
      await this.mealService.create(mealToCreate);
      return res.status(201).json({ message: "Meal created successfully" });
    } catch (error) {
      next(error);
    }
  }

  async getAll() {}

  async update() {}

  async deleteByID() {}
}
