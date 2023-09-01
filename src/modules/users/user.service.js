import BaseError from "../../base-error.js";
import UserEntity from "./entities/user.entity.js";

export default class UserService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async registerUser(userData) {
        const user = await this.userRepository.getByEmail(userData.email);
        if (user) {
            throw new BaseError(`User with email ${userData.email} already exists`, 400);
        }
        const userEntity = await UserEntity.createWithHashedPassword(userData);
        await this.userRepository.addUser(userEntity);
        return userEntity;
    }

    async getUserData(userID) {
        const user = await this.userRepository.getByID(userID);
        if (!user) {
            throw new BaseError(`User with id ${userID} doesn't exist`, 400);
        }
        return user;
    }
}