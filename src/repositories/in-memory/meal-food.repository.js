export default class InMemoryMealFoodRepository {
    mealFoods = [
        {
            id: 1,
            food_name: 'Banana',
            quantity_in_grams: 100,
            quantity_in_units: '',
            meal_info_id: 1
        },
        {
            id: 2,
            food_name: 'Rice',
            quantity_in_grams: 200,
            quantity_in_units: '',
            meal_info_id: 1
        },
        {
            id: 1,
            food_name: 'Beans',
            food_quantity_in_grams: 200,
            quantity_in_units: '',
            meal_info_id: 1
        },

    ];

    async create(mealFoods, mealInfoId) {
        mealFoods.forEach(mealFood => {
            this.mealFoods.push({
                ...mealFood,
                meal_info_id: mealInfoId
            });
        });
        return this.mealFoods;
    }

    async findByMealInfoId(mealInfoId) {
        return this.mealFoods.filter(mealFood => mealFood.meal_info_id === mealInfoId);
    }

    async findById(mealFoodId) {
        return this.mealFoods.find(mealFood => mealFood.id === mealFoodId);
    }

    async delete(mealFoodId) {
        this.mealFoods = this.mealFoods.filter(mealFood => mealFood.id !== mealFoodId);
        return true;
    }

    async update(mealFoodId, mealFood) {
        const mealFoodIndex = this.mealFoods.findIndex(mealFood => mealFood.id === mealFoodId);
        this.mealFoods[mealFoodIndex] = mealFood;
        return mealFood;
    }
}