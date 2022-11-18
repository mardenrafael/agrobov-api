import { TOx } from "../../../repos/ox/types/TOx";

export interface OxService {
  execute(
    {},
    ownerId: number
  ): Promise<Array<Omit<TOx, "id">> | Omit<TOx, "id"> | Error>;
}
