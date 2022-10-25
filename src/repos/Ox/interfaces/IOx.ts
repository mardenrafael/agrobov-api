import { TOx } from "../types/TOx";

export interface IOx {
  createOx({
    born_date,
    earring,
    genre,
    marked,
    ownerId,
  }: Omit<TOx, "id">): Promise<Omit<TOx, "id"> | Error>;
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
    }: Partial<Omit<TOx, "id">>
  ): Promise<Omit<TOx, "id"> | Error>;
}
