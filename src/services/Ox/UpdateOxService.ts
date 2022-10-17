import { Ox, PrismaClient } from "@prisma/client";
import { OxService } from "./interface/OxService";

export type OxUpdateRequest<Ox> = {
  [P in keyof Ox]?: Ox[P];
};

export class UpdateOxServiceS implements OxService {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async execute({
    id,
    ownerId,
    earring,
    marked,
    genre,
    born_date,
  }: OxUpdateRequest<Ox>): Promise<Ox | Error> {
    try {
      const ox = await this.prisma.ox.update({
        where: {
          id,
        },
        data: {
          ownerId,
          earring,
          genre,
          marked,
          born_date,
        },
      });

      return ox;
    } catch (error) {
      console.log(error);

      return new Error("Erro on update Ox");
    }
  }
}
