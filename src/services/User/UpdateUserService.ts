import { IUser } from "../../repos/User/interfaces/IUser";
import { TUser } from "../../repos/User/types/TUser";
import PrismaErrorHandler from "../../utils/PrismaErrorHandler";

export default class UpdateUserService {
  private readonly repo: IUser;

  constructor(repo: IUser) {
    this.repo = repo;
  }

  public async execute({
    name,
    id,
  }: Pick<TUser, "id" | "name">): Promise<
    Omit<TUser, "id" | "password"> | Error
  > {
    try {
      const user = await this.repo.updateUser({
        name,
        id,
      });

      return user;
    } catch (error: any) {
      return new PrismaErrorHandler(error);
    }
  }
}
