import { PrismaClient } from "@prisma/client";
import { TUser } from "../../repos/Types/TUser";
import { IUser } from "../interfaces/IUser";

export default class UserRepo implements IUser {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async createUser({
    name,
    email,
    brand,
    password,
  }: TUser): Promise<TUser | Error> {
    try {
      await this.prisma.$connect();
      const result = await this.prisma.user.create({
        data: {
          name,
          email,
          brand,
          password,
        },
      });

      await this.prisma.$disconnect();
      return result;
    } catch (error) {
      await this.prisma.$disconnect();
      throw error;
    }
  }

  public async getUserById(): Promise<void> {}
}
