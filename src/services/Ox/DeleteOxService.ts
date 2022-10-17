import { Ox, PrismaClient } from "@prisma/client";
import { OxService } from "./interface/OxService";

type OxDeleteRequest = {
  id: number;
};

export class DeleteOxService implements OxService {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async execute({
    id,
  }: OxDeleteRequest): Promise<Ox | Ox[] | Error> {
    try {
      await this.prisma.$connect();
      const Ox = await this.prisma.ox.delete({
        where: {
          id,
        },
      });

      await this.prisma.$disconnect();
      return Ox;
    } catch (error) {
      await this.prisma.$disconnect();
      return new Error("Error on delete Ox");
    }
  }
}
