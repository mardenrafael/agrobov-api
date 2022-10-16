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

  public async execute({ id }: OxDeleteRequest): Promise<Ox | Ox[] | Error> {
    try {
      const Ox = await this.prisma.ox.delete({
        where: {
          id,
        },
      });

      return Ox;
    } catch (error) {
      console.log(error);

      return new Error("Error on delete Ox");
    }
  }
}

