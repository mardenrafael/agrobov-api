import { IUser } from "../../repos/user/interfaces/IUser";
import bcrypt from "bcrypt";
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
      const hashPassword = await bcrypt.hash(password, 10);
      return await this.repo.changeUserPassword({
        id,
        password: hashPassword,
      });
    } catch (error: any) {
      throw error;
    }
  }
}
