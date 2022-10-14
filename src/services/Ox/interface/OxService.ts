import { Ox } from "@prisma/client";

export interface OxService {
  execute({}, ownerId: number): Promise<Array <Ox> | Ox | Error >;
}
