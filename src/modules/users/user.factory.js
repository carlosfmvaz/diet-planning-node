import SqliteUserRepository from "../../repositories/sqlite/user.repository.js";
import UserController from "./user.controller.js";
import UserService from "./user.service.js";

export default function userFactory() {
  const userRepository = new SqliteUserRepository();
  const userService = new UserService(userRepository);
  const userController = new UserController(userService);
  return userController;
}
