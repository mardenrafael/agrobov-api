import { RequestCreateOx } from './../User/types/OxTypes';
import { PrismaClient, Ox } from "@prisma/client";
import { OxService } from "./interface/OxService";

export class CreateOxService implements OxService{
  private readonly prisma: PrismaClient;
  
  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async execute({
    earring,
    born_date 
    }: RequestCreateOx,
    ownerId: number): Promise<Error | Ox> {
    const result: Ox | Error = await this.prisma.ox
    .create({
      data: {
        earring: earring,
        born_date: born_date,
        ownerId: ownerId
      }
    }
    )
    .catch((err) => {
      return new Error(err.message)
    }); 

   if(result instanceof Error) {
    return result
   };
  
   return result;
  }
}
