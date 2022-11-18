import { IUser } from "../../repos/user/interfaces/IUser";
import { TUser } from "../../repos/user/types/TUser";

export default class DeleteUserService {
  private readonly repo: IUser;

  constructor(repo: IUser) {
    this.repo = repo;
  }

  public async execute({
    email,
  }: Pick<TUser, "email">): Promise<
    Omit<TUser, "id" | "password"> | Error
  > {
    try {
      const user = await this.repo.deleteUser({
        email,
      });

      return user;
    } catch (error: any) {
      throw error;
    }
  }
}
