import { PrismaClient, Ox } from "@prisma/client";
import { OxService } from "./interface/OxService";

export class GetOxService implements OxService {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async execute(owner_id: number): Promise<Ox[] | Error> {
    const result: Ox[] = await this.prisma.ox.findMany({
      where: {
        ownerId: owner_id,
      },
    });

    if (!result) {
      return new Error("Ox not found!");
    }

    return result;
  }
}

