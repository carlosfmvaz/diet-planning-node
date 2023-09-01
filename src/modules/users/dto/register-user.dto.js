export default class RegisterUserDTO {
  name;
  email;
  password;

  constructor(data) {
    Object.assign(this, data);
  }
}