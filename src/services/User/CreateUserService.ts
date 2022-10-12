import { PrismaClient, User } from "@prisma/client";
import { RequestUser } from ".";
import UserService from "./interface/UserService";

export default class CreateUserService implements UserService {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async execute({
    email,
    name,
    password,
  }: RequestUser): Promise<User | Error> {
    const result = await this.prisma.user
      .create({
        data: {
          name: name,
          email: email,
          password: password,
        },
      })
      .catch((err) => {
        return err;
      });

    if (!result) {
      return new Error("Error on create user");
    }

    return result;
  }
}

