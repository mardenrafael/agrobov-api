import { PrismaClient, User } from "@prisma/client";
import { UserService } from "./interface/UserService";
import { OmitUserRequest } from "./types/UserTypes";

export class GetUserByIdService implements UserService {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async execute(id: number): Promise<Error | OmitUserRequest<User>> {
    const result: OmitUserRequest<User> = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        email: true,
        name: true,
        brand: true,
        active: true,
        Ox: true,
        deleted: true
      },
    });

    if (!result) {
      return new Error("User not found!");
    }

    return result;
  }
}
