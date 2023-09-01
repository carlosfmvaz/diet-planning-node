import { PrismaClient } from "@prisma/client";

export default class SqliteUserRepository {
  prisma;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async addUser(user) {
    await this.prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: user.password,
      },
    });
  }

  async getByID(id) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    return user;
  }

  async getByEmail(email) {
    return await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }
}
