import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import JWT from "./GenerateJWTService";

type LoginRequest = {
  email: string;
  password: string;
};

export class LoginService {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async execute({
    email,
    password,
  }: LoginRequest): Promise<String | Error> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        email: true,
        password: true,
      },
    });

    if (!user) {
      throw new Error("Email or password incorrect!");
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      throw new Error("Email or password incorrect!");
    }

    const token = JWT.generate(user.id);

    return token;
  }
}
