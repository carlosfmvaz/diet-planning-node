export default class InMemoryMealInfoRepository {
    mealInfo = [
        {
            id: 1,
            meal_number: 1,
            meal_description: 'Breakfast',
            meal_time: '08:00:00',
            user_id: 1
        },
        {
            id: 2,
            meal_number: 2,
            meal_description: 'Lunch',
            meal_time: '12:00:00',
            user_id: 1
        },
        {
            id: 3,
            meal_number: 3,
            meal_description: 'Dinner',
            meal_time: '18:00:00',
            user_id: 1
        }
    ];

    async create(mealInfo) {
        mealInfo.id = this.mealInfo.length + 1;
        this.mealInfo.push(mealInfo);
        return mealInfo;
    }

    async findByUserId(userId) {
        return this.mealInfo.filter(mealInfo => mealInfo.user_id === userId);
    }

    async findById(mealInfoId) {
        return this.mealInfo.find(mealInfo => mealInfo.id === mealInfoId);
    }

    async delete(mealInfoId) {
        this.mealInfo = this.mealInfo.filter(mealInfo => mealInfo.id !== mealInfoId);
        return true;
    }

    async update(mealInfoId, mealInfo) {
        const mealInfoIndex = this.mealInfo.findIndex(mealInfo => mealInfo.id === mealInfoId);
        this.mealInfo[mealInfoIndex] = mealInfo;
        return mealInfo;
    }
}