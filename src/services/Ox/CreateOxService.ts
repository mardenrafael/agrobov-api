import { PrismaClient, Ox } from "@prisma/client";
import { OxService } from "./interface/OxService";
import { RequestCreateOx } from "./types/OxTypes";

export class CreateOxService implements OxService {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async execute(
    { earring, born_date, genre }: RequestCreateOx,
    ownerId: number
  ): Promise<Error | Ox> {
    await this.prisma.$connect();

    const result: Ox | Error = await this.prisma.ox
      .create({
        data: {
          earring: earring,
          born_date: born_date,
          genre: genre,
          ownerId: ownerId,
        },
      })
      .catch(err => {
        return new Error(err.message);
      });

    if (result instanceof Error) {
      await this.prisma.$disconnect();
      return result;
    }

    await this.prisma.$disconnect();
    return result;
  }
}
