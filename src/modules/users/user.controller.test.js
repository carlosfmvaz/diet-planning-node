import InMemoryUserRepository from "../../repositories/in-memory/user.repository.js";
import UserController from "./user.controller.js";
import UserService from "./user.service.js";

describe("UserController test suite", () => {
  let userController;
  let responseMock;
  let nextMock;
  beforeAll(() => {
    const userRepository = new InMemoryUserRepository();
    const userService = new UserService(userRepository);
    userController = new UserController(userService);
  });

  beforeEach(() => {
    responseMock = {
      status: jest.fn(() => responseMock),
      json: jest.fn(),
    };

    nextMock = jest.fn();
  });

  it("should register a user", async () => {
    const requestMock = {
      body: {
        name: "John Doe",
        email: "johndoe@email.com",
        password: "123456",
      },
    };

    await userController.register(requestMock, responseMock);
    expect(responseMock.json).toHaveBeenCalledWith({
      message: "User created successfully",
    });
  });

  it("should return an error object when passing missing params", async () => {
    const requestMock = {
      body: {
        name: "John Doe",
        email: "johndoe12@email.com",
      },
    };

    await userController.register(requestMock, responseMock, nextMock);
    expect(nextMock.mock.calls[0][0].message).toBe("\"password\" is required");
  });

  it("should throw an error when email is invalid", async () => {
    const requestMock = {
      body: {
        name: "John Doe",
        email: "johndoe12email.com",
        password: "123456",
      },
    };

    await userController.register(requestMock, responseMock, nextMock);
    expect(nextMock.mock.calls[0][0].message).toBe("\"email\" must be a valid email");
  });
});
