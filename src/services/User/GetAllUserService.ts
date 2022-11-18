import { IUser } from "../../repos/user/interfaces/IUser";
import { TUser } from "../../repos/user/types/TUser";

export default class GetAllUserService {
  private readonly repo: IUser;

  constructor(repo: IUser) {
    this.repo = repo;
  }

  public async execute(maxQtd: number): Promise<TUser[] | Error> {
    return await this.repo.getAllUser(maxQtd);
  }
}
