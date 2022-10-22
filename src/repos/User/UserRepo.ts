import { PrismaClient } from "@prisma/client";
import { IUser } from "./interfaces/IUser";
import { TUser } from "./Types/TUser";

export default class UserRepo implements IUser {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }
  getUserById({ id }: TUser): Promise<TUser> {
    throw new Error("Method not implemented." + id);
  }

  public async createUser({
    name,
    email,
    brand,
    password,
  }: TUser): Promise<TUser> {
    try {
      const result = await this.prisma.user.create({
        data: {
          name,
          email,
          brand,
          password,
        },
        select: {
          id: true,
          Ox: true,
          name: true,
          email: true,
          brand: true,
          password: true,
        },
      });

      return result;
    } catch (error) {
      throw error;
    }
  }
}
