import InMemoryMealFoodRepository from "../../repositories/in-memory/meal-food.repository.js";
import InMemoryMealInfoRepository from "../../repositories/in-memory/meal-info.repository.js";
import MealService from "./meal.service.js";

describe('MealService test suite', () => {
    let mealService;
    beforeEach(() => {
        const mealFoodRepository = new InMemoryMealFoodRepository();
        const mealInfoRepository = new InMemoryMealInfoRepository();
        mealService = new MealService(mealInfoRepository, mealFoodRepository);
    });

    it('should fail if meal_foods is empty', async () => {
        const mealToCreate = {
            meal_number: 1,
            meal_description: 'Breakfast',
            meal_time: '08:00',
            meal_foods: []
        };
        await expect(mealService.create(mealToCreate)).rejects.toThrow('Missing foods field');
    });

    it('should create a meal', async () => {
        const mealToCreate = {
            meal_number: 1,
            meal_description: 'Breakfast',
            meal_time: '08:00',
            meal_foods: [
                {
                    food_name: 'Banana',
                    quantity_in_grams: 100,
                    quantity_in_units: null
                }
            ]
        };
        const result = await mealService.create(mealToCreate);
        expect(result).toBe(true);
    });
});