import BaseError from "../../base-error.js";
import RegisterUserDTO from "./dto/register-user.dto.js";
import { userRegistrationSchema } from "./validations/user.validations.js";

export default class UserController {
  userService;
  constructor(userService) {
    this.userService = userService;
  }

  async register(req, res, next) {
    try {
      const { body } = req;
      const { error } = userRegistrationSchema.validate(body);
      if (error) {
        throw new BaseError(error.details[0].message, 400);
      }
      
      await this.userService.registerUser(new RegisterUserDTO(body));
      return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      next(error);
    }
  }
  async getUserData(req, res, next) {
    try {
      let { id } = req.params;
      id = parseInt(id);
      const user = await this.userService.getUserData(id);

      return res.status(200).json({ data: user });
    } catch (error) {
      next(error);
    }
  }
}
