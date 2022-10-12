import { PrismaClient, User } from "@prisma/client";
import { RequestUser } from ".";
import { UserService } from "./interface/UserService";
import { OmitUserRequest } from "./types/UserTypes";

export default class CreateUserService implements UserService {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async execute({
    email,
    name,
    passWord,
  }: RequestUser): Promise<OmitUserRequest<User> | Error> {
    const result: User | Error = await this.prisma.user
      .create({
        data: {
          name,
          email,
          password: passWord,
        },
      })
      .catch((err) => {
        return new Error(err.message);
      });

    if (result instanceof Error) {
      return result;
    }

    const { password, created_at, updated_at, ...user } = result;

    return user;
  }
}

