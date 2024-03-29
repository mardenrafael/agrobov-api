import prisma from "../../utils/Prisma";
import PrismaErrorHandler from "../../utils/PrismaErrorHandler";
import { IOx } from "./interfaces/IOx";
import { TOx } from "./types/TOx";

export class OxRepo implements IOx {
  public async createOx({
    born_date,
    earring,
    genre,
    marked,
    ownerId,
  }: Omit<TOx, "id" | "active">): Promise<TOx | Error> {
    try {
      const Ox = await prisma.ox.create({
        data: {
          born_date,
          genre,
          earring,
          marked,
          ownerId,
        },
        select: {
          id: true,
          active: true,
          marked: true,
          born_date: true,
          earring: true,
          genre: true,
          owner: {
            select: {
              created_at: false,
              deleted_at: false,
              active: false,
              updated_at: false,
              password: false,
              id: true,
              name: true,
              email: true,
              brand: true,
            },
          },
          ownerId: true,
        },
      });

      return Ox;
    } catch (error: any) {
      throw new PrismaErrorHandler(error);
    }
  }
  public async getOxById({ id }: Pick<TOx, "id">): Promise<TOx | Error> {
    try {
      const Ox = await prisma.ox.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          ownerId: true,
          active: true,
          owner: {
            select: {
              id: true,
              name: true,
              email: true,
              brand: true,
            },
          },
          born_date: true,
          earring: true,
          marked: true,
          genre: true,
        },
      });

      if (!Ox) {
        throw new Error("OX not found!");
      }

      return Ox;
    } catch (error: any) {
      throw new PrismaErrorHandler(error);
    }
  }
  public async deleteOx({ id }: Pick<TOx, "id">): Promise<TOx | Error> {
    try {
      const ox = await prisma.ox.delete({
        where: {
          id,
        },
        select: {
          id: true,
          active: true,
          marked: true,
          ownerId: true,
          owner: {
            select: {
              id: true,
              name: true,
              email: true,
              brand: true,
            },
          },
          genre: true,
          born_date: true,
          earring: true,
        },
      });

      return ox;
    } catch (error: any) {
      throw new PrismaErrorHandler(error);
    }
  }
  public async updateOx(
    { id }: Pick<TOx, "id">,
    {
      ownerId,
      marked,
      genre,
      earring,
      born_date,
    }: Partial<Omit<TOx, "id">>
  ): Promise<TOx | Error> {
    try {
      const ox = await prisma.ox.update({
        where: {
          id,
        },
        data: {
          ownerId,
          earring,
          genre,
          marked,
          born_date,
        },
      });

      return ox;
    } catch (error: any) {
      throw new PrismaErrorHandler(error);
    }
  }
}
