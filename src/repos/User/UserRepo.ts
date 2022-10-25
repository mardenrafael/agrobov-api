import { PrismaClient } from "@prisma/client";
import { IUser } from "./interfaces/IUser";
import { TUser } from "./types/TUser";

export default class UserRepo implements IUser {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }
  public async updateUser({
    name,
    id,
  }: Partial<Pick<TUser, "id" | "name">>): Promise<
    Omit<TUser, "id" | "password"> | Error
  > {
    try {
      const user = await this.prisma.user.update({
        where: {
          id,
        },
        data: {
          name,
        },
        select: {
          Ox: true,
          brand: true,
          email: true,
          name: true,
        },
      });

      return user;
    } catch (error) {
      throw error;
    }
  }

  public async getUserByEmail({
    email,
  }: Pick<TUser, "email">): Promise<
    Omit<TUser, "id" | "password"> | Error
  > {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          email,
        },
        select: {
          email: true,
          name: true,
          brand: true,
          Ox: true,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      throw error;
    }
  }

  public async createUser({
    name,
    email,
    brand,
    password,
  }: TUser): Promise<Omit<TUser, "id" | "password">> {
    try {
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
        },
      });

      return result;
    } catch (error) {
      throw error;
    }
  }
}
