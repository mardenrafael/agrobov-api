import { IUser } from "../../repos/user/interfaces/IUser";
import { TUser } from "../../repos/user/types/TUser";

export default class UpdateUserPasswordService {
  private readonly repo: IUser;

  constructor(repo: IUser) {
    this.repo = repo;
  }

  public async execute({
    id,
    password,
  }: Pick<TUser, "id" | "password">): Promise<
    Omit<TUser, "password"> | Error
  > {
    try {
      return await this.repo.changeUserPassword({ id, password });
    } catch (error: any) {
      throw error;
    }
  }
}
