import { RequestCreateOx } from "./types/OxTypes";
import { PrismaClient, Ox } from "@prisma/client";
import { OxService } from "./interface/OxService";

export class CreateOxService implements OxService {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async execute(
    { earring, born_date, genre }: RequestCreateOx<Ox>,
    ownerId: number
  ): Promise<Error | Ox> {
    const result: Ox | Error = await this.prisma.ox
      .create({
        data: {
          earring: earring,
          born_date: born_date,
          ownerId: ownerId,
          genre: genre,
        },
      })
      .catch((err) => {
        return new Error(err.message);
      });

    if (result instanceof Error) {
      return result;
    }

    return result;
  }
}
