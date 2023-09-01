export default class InMemoryUserRepository {
  users = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@test.com",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "janedoe@test.com",
    },
  ];

  addUser(user) {
    user.id = Math.random().toString(36).substring(2, 9);
    this.users.push(user);
  }

  getByID(id) {
    return this.users.find((user) => user.id == id);
  }

  getByEmail(email) {
    return this.users.find((user) => user.email === email);
  }
}