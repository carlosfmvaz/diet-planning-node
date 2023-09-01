import bcrypt from "bcrypt";
import BaseError from "../../../base-error.js";

export default class UserEntity {
  email;
  name;
  password;

  constructor(data) {
    if (!data.email) throw new BaseError('Missing email field', 400);
    if (!data.name) throw new BaseError("Missing name field", 400);
    if (!data.password) throw new BaseError("Missing password field", 400);

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(data.email)) throw new BaseError("Invalid email", 400);

    this.email = data.email;
    this.name = data.name;
    this.password = data.password; // Store the plain password here
  }

  async hashPassword() {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword; // Update the hashed password
  }

  static async createWithHashedPassword(data) {
    const instance = new UserEntity(data);
    await instance.hashPassword();
    return instance;
  }
}
