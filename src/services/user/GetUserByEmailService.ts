import { IUser } from "../../repos/user/interfaces/IUser";
import { TUser } from "../../repos/user/types/TUser";

export default class GetUserByEmailService {
  private readonly repo: IUser;

  constructor(repo: IUser) {
    this.repo = repo;
  }

  public async execute({
    email,
  }: Pick<TUser, "email">): Promise<Error | Omit<TUser, "password">> {
    try {
      const user = await this.repo.getUserByEmail({
        email,
      });

      return user;
    } catch (error: any) {
      throw error;
    }
  }
}
