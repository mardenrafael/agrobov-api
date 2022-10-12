import { PrismaClient, User } from "@prisma/client";
import UserService from "./interface/UserService";

export class GetUserByIdService implements UserService {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async execute(id: number): Promise<Error | User> {
    const result = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!result) {
      return new Error("User not found!");
    }

    return result;
  }
}

