import prisma from "../../utils/Prisma";
import { IUser } from "./interfaces/IUser";
import { TUser } from "./types/TUser";

export default class UserRepo implements IUser {


  public async deleteUser({
    email,
  }: Pick<TUser, "email">): Promise<
    Omit<TUser, "id" | "password"> | Error
  > {
    try {
      const user = await prisma.user.delete({
        where: {
          email,
        },
      });

      return user;
    } catch (error) {
      throw error;
    }
  }
  public async updateUser({
    name,
    id,
  }: Partial<Pick<TUser, "id" | "name">>): Promise<
    Omit<TUser, "id" | "password"> | Error
  > {
    try {
      const user = await prisma.user.update({
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
    Omit<TUser, "password"> | Error
  > {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
        select: {
          id: true,
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
    password,
  }: TUser): Promise<Omit<TUser, "id" | "password">> {
    try {
      const result = await prisma.user.create({
        data: {
          name,
          email,
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
