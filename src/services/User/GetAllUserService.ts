import { IUser } from "../../repos/User/interfaces/IUser";
import { TUser } from "../../repos/User/types/TUser";

export default class GetAllUserService {
  private readonly repo: IUser;

  constructor(repo: IUser) {
    this.repo = repo;
  }

  public async execute(maxQtd: number): Promise<TUser[] | Error> {
    return await this.repo.getAllUser(maxQtd);
  }
}
