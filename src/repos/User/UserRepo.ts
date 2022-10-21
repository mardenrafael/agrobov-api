import { PrismaClient } from "@prisma/client";
import { IUser } from "../interfaces/IUser";
import { TUser } from "../Types/TUser";

export default class UserRepo implements IUser {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  getUserById({ id }: TUser): Promise<TUser> {
    throw new Error("Method not implemented." + id);
  }

  public async createUser({
    name,
    email,
    brand,
    password,
  }: TUser): Promise<Omit<TUser, "id">> {
    try {
      await this.prisma.$connect();
      const result = await this.prisma.user.create({
        data: {
          name,
          email,
          brand,
          password,
        },
        select: {
          Ox: true,
          name: true,
          email: true,
          brand: true,
          password: true,
        },
      });

      await this.prisma.$disconnect();
      return result;
    } catch (error) {
      await this.prisma.$disconnect();
      throw error;
    }
  }
}
