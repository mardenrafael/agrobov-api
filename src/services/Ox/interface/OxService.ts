import { Ox } from "@prisma/client";

export interface OxService {
  execute({}): Promise<Array <Ox> | Ox | Error >;
}
