import { UserService } from "./interface/UserService";
import { IUser } from "../../repos/User/interfaces/IUser";
import { TUser } from "../../repos/User/types/TUser";

export default class UpdateUserService implements UserService {
  private readonly repo: IUser;

  constructor(repo: IUser) {
    this.repo = repo;
  }

  public async execute({
    name,
    id
  }: Pick<TUser, "id" | "name">): Promise<Omit<TUser, "id" | "password"> | Error> {
    
    try {
      const user = await this.repo.updateUser({
        name,
        id
      });

      return user;
    } catch (error) {
      throw error;
    }
  }
}
