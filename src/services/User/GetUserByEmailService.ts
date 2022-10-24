import { PrismaClient, User } from "@prisma/client";
import { UserService } from "./interface/UserService";
import { OmitUserRequest } from "./types/UserTypes";

export class GetUserByEmailService implements UserService {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async execute(
    email: string
  ): Promise<Error | OmitUserRequest<User>> {
    await this.prisma.$connect();
    const result: OmitUserRequest<User> =
      await this.prisma.user.findUnique({
        where: {
          email: email,
        },
        select: {
          email: true,
          name: true,
          brand: true,
          active: true,
          Ox: true,
          deleted_at: true,
        },
      });

    if (!result) {
      await this.prisma.$disconnect();
      return new Error("User not found!");
    }

    await this.prisma.$disconnect();
    return result;
  }
}
