import { PrismaClient, User } from "@prisma/client";
import { UserService } from "./interface/UserService";
import { OmitUserRequest } from "./types/UserTypes";

export class GetUserByIdService implements UserService {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async execute(id: number): Promise<Error | OmitUserRequest<User>> {
    const result = await this.prisma.user.findUnique({
      where: {
        id: id
      },
    });

    if (!result) {
      return new Error("User not found!");
    }
    const { password, created_at, updated_at, ...user } = result;

    return user;
  }
}

