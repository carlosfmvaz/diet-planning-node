import UserService from "./user.service.js";
import InMemoryUserRepository from "../../repositories/in-memory/user.repository.js";
import BaseError from "../../base-error.js";

describe("UserService", () => {
  let userService;
  beforeEach(() => {
    const mockUserRepository = new InMemoryUserRepository();
    userService = new UserService(mockUserRepository);
  });

  it("should register and generate an ID", async () => {
    const userData = {
      email: "test@example.com",
      name: "Test User",
      password: "password123",
    };

    const registeredUser = await userService.registerUser(userData);
    expect(registeredUser).toHaveProperty("id");
  });

  it("should return an error if email is not valid", async () => {
    const userData = {
      email: "iamaninvalidemail",
      name: "Test User",
      password: "password123",
    };

    await expect(userService.registerUser(userData)).rejects.toThrowError(
      "Invalid email"
    );
  });

  it("should return an error if a property is missing", async () => {
    const userData = {
      email: "test@example.com",
      name: "Test User",
    };

    await expect(userService.registerUser(userData)).rejects.toThrowError(
      "Missing password field"
    );
  });

  it("should return an error if user already exists", async () => {
    const userData = {
      email: "teste@example.com",
      name: "Test User",
      password: "password123",
    };

    // Register the user for the first time
    await userService.registerUser(userData);
    await expect(userService.registerUser(userData)).rejects.toThrow(
      new BaseError(`User with email ${userData.email} already exists`, 400)
    );
  });
});
