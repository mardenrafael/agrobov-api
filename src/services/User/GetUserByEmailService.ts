import { IUser } from "../../repos/User/interfaces/IUser";
import { TUser } from "../../repos/User/types/TUser";

export default class GetUserByEmailService {
  private readonly repo: IUser;

  constructor(repo: IUser) {
    this.repo = repo;
  }

  public async execute({
    email,
  }: Pick<TUser, "email">): Promise<
    Error | Omit<TUser, "password">
  > {
    const user = await this.repo.getUserByEmail({
      email,
    });

    return user;
  }
}
