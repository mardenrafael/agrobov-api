import { UserService } from "./interface/UserService";
import bcrypt from "bcrypt";
import { TUser } from "../../repos/Types/TUser";
import { IUser } from "../../repos/interfaces/IUser";

export default class CreateUserService implements UserService {
  private readonly repo: IUser;

  constructor(repo: IUser) {
    this.repo = repo;
  }

  public async execute({
    name,
    email,
    password,
    brand,
  }: Omit<TUser, "id">): Promise<Omit<TUser, "id"> | Error> {
    const hashPassword = await bcrypt.hash(password, 10);
    try {
      const user = this.repo.createUser({
        name,
        brand,
        email,
        password: hashPassword,
      });

      return user;
    } catch (error) {
      throw error;
    }
  }
}
