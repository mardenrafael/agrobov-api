import { IUser } from "../../repos/user/interfaces/IUser";
import { TUser } from "../../repos/user/types/TUser";

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
      throw error;
    }
  }
}
