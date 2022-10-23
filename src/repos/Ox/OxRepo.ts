import prisma from "../../utils/Prisma";
import { IOx } from "./interfaces/IOx";
import { TOx } from "./types/TOx";

export class OxRepo implements IOx {
  public async createOx({
    born_date,
    earring,
    genre,
    marked,
    ownerId,
  }: Omit<TOx, "id">): Promise<Omit<TOx, "id"> | Error> {
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
          marked: true,
          born_date: true,
          earring: true,
          genre: true,
          owner: true,
          ownerId: true,
        },
      });

      return Ox;
    } catch (error) {
      throw error;
    }
  }
  public async getOxById({
    id,
  }: Pick<TOx, "id">): Promise<Omit<TOx, "id"> | Error> {
    try {
      const Ox = await prisma.ox.findUnique({
        where: {
          id,
        },
        select: {
          ownerId: true,
          owner: true,
          born_date: true,
          earring: true,
          marked: true,
          genre: true,
        },
      });

      if (!Ox) {
        throw new Error("Ox not found!");
      }
      return Ox;
    } catch (error) {
      throw error;
    }
  }
  DeleteOx({ id }: Pick<TOx, "id">): Promise<Omit<TOx, "id"> | Error> {
    throw new Error("Method not implemented." + id);
  }
  updateOx(
    { id }: Pick<TOx, "id">,
    {
      ownerId,
      marked,
      genre,
      earring,
      born_date,
    }: Partial<Omit<TOx, "id">>
  ): Promise<Omit<TOx, "id"> | Error> {
    throw new Error(
      "Method not implemented." +
        ownerId +
        id +
        earring +
        born_date +
        earring +
        genre +
        id +
        marked
    );
  }
}
