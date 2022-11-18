import bcrypt from "bcrypt";
import { IUser } from "../../repos/user/interfaces/IUser";
import { TUser } from "../../repos/user/types/TUser";

export default class CreateUserService {
  private readonly repo: IUser;

  constructor(repo: IUser) {
    this.repo = repo;
  }

  public async execute({
    name,
    email,
    password,
  }: Omit<TUser, "id">): Promise<Omit<TUser, "password"> | Error> {
    try {
      const hashPassword = await bcrypt.hash(password, 10);
      const user = this.repo.createUser({
        name,
        email,
        password: hashPassword,
      });

      return user;
    } catch (error: any) {
      throw error;
    }
  }
}
