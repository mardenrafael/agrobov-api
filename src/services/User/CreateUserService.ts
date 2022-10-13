import { PrismaClient, User } from "@prisma/client";
import { RequestUser } from ".";
import { UserService } from "./interface/UserService";
import { OmitUserRequest } from "./types/UserTypes";
import bcrypt from "bcrypt";

export default class CreateUserService implements UserService {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async execute({
    name,
    email,
    passWord,
  }: RequestUser): Promise<OmitUserRequest<User> | Error> {
    const hashPassword = await bcrypt.hash(passWord, 10);

    const result: User | Error = await this.prisma.user
      .create({
        data: {
          name,
          email,
          password: hashPassword,
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
