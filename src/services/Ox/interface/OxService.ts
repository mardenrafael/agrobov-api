import { TOx } from "../../../repos/Ox/types/TOx";

export interface OxService {
  execute(
    {},
    ownerId: number
  ): Promise<Array<Omit<TOx, "id">> | Omit<TOx, "id"> | Error>;
}
