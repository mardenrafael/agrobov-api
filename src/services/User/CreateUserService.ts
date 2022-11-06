import bcrypt from "bcrypt";
import { IUser } from "../../repos/User/interfaces/IUser";
import { TUser } from "../../repos/User/types/TUser";
import PrismaErrorHandler from "../../utils/PrismaErrorHandler";

export default class CreateUserService {
  private readonly repo: IUser;

  constructor(repo: IUser) {
    this.repo = repo;
  }

  public async execute({
    name,
    email,
    password,
    brand,
  }: Omit<TUser, "id">): Promise<Omit<TUser, "id" | "password"> | Error> {
    const hashPassword = await bcrypt.hash(password, 10);
    try {
      const user = this.repo.createUser({
        name,
        brand,
        email,
        password: hashPassword,
      });

      return user;
    } catch (error: any) {
      return new PrismaErrorHandler(error);
    }
  }
}
