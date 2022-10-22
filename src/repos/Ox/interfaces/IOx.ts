import { Oxgenre } from "@prisma/client";
import { TUser } from "../../User/types/TUser";

type TOx = {
  id: number;
  marked: boolean;
  earring: string;
  born_date: Date;
  owner: TUser;
  ownerId: number;
  genre: Oxgenre;
};

export interface IOx {
  createOx({
    born_date,
    earring,
    genre,
    marked,
    ownerId,
  }: Omit<TOx, "id" | "owner">): Promise<Omit<TOx, "id"> | Error>;
  getOxById({ id }: Pick<TOx, "id">): Promise<Omit<TOx, "id"> | Error>;
  DeleteOx({ id }: Pick<TOx, "id">): Promise<Omit<TOx, "id"> | Error>;
  updateOx(
    { id }: Pick<TOx, "id">,
    {
      ownerId,
      marked,
      genre,
      earring,
      born_date,
    }: Partial<Omit<TOx, "owner" | "id">>
  ): Promise<Omit<TOx, "id"> | Error>;
}
