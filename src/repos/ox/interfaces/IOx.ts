import { TOx } from "../types/TOx";

export interface IOx {
  createOx({
    born_date,
    earring,
    genre,
    marked,
    ownerId,
  }: Omit<TOx, "id" | "active">): Promise<TOx | Error>;
  getOxById({ id }: Pick<TOx, "id">): Promise<TOx | Error>;
  deleteOx({ id }: Pick<TOx, "id">): Promise<TOx | Error>;
  updateOx(
    { id }: Pick<TOx, "id">,
    { ownerId, marked, genre, earring, born_date }: Partial<TOx>
  ): Promise<TOx | Error>;
}
