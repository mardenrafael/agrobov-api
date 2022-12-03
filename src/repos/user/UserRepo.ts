import prisma from "../../utils/Prisma";
import PrismaErrorHandler from "../../utils/PrismaErrorHandler";
import { IUser } from "./interfaces/IUser";
import { TUser } from "./types/TUser";

export default class UserRepo implements IUser {
  public async changeUserPassword({
    id,
    password,
  }: Pick<TUser, "id" | "password">): Promise<
    Error | Omit<TUser, "password">
  > {
    try {
      const user = await prisma.user.update({
        where: {
          id,
        },
        data: {
          password,
        },
        select: {
          brand: true,
          email: true,
          name: true,
          id: true,
          Ox: true,
        },
      });

      return user;
    } catch (error: any) {
      throw new PrismaErrorHandler(error);
    }
  }
  public async getAllUser(maxQtd: number): Promise<Error | TUser[]> {
    try {
      if (maxQtd !== 0) {
        return await prisma.user.findMany({
          take: maxQtd,
        });
      } else {
        return await prisma.user.findMany();
      }
    } catch (error: any) {
      throw new PrismaErrorHandler(error);
    }
  }

  public async deleteUser({
    email,
  }: Pick<TUser, "email">): Promise<Omit<TUser, "password"> | Error> {
    try {
      const user = await prisma.user.delete({
        where: {
          email,
        },
        select: {
          name: true,
          brand: true,
          email: true,
          id: true,
          Ox: true,
        },
      });

      return user;
    } catch (error: any) {
      return new PrismaErrorHandler(error);
    }
  }
  public async updateUser({
    name,
    id,
  }: Partial<Pick<TUser, "id" | "name">>): Promise<
    Omit<TUser, "password"> | Error
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
          id: true,
          Ox: true,
          brand: true,
          email: true,
          name: true,
        },
      });

      return user;
    } catch (error: any) {
      throw new PrismaErrorHandler(error);
    }
  }

  public async getUserByEmail({
    email,
  }: Pick<TUser, "email">): Promise<Omit<TUser, "password"> | Error> {
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
    } catch (error: any) {
      throw new PrismaErrorHandler(error);
    }
  }

  public async createUser({
    name,
    email,
    password,
  }: Omit<TUser, "id">): Promise<Omit<TUser, "password"> | Error> {
    try {
      const result = await prisma.user.create({
        data: {
          name,
          email,
          password,
        },
        select: {
          id: true,
          Ox: true,
          name: true,
          email: true,
          brand: true,
        },
      });

      return result;
    } catch (error: any) {
      throw new PrismaErrorHandler(error);
    }
  }
}
