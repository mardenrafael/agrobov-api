import { User } from "@prisma/client";
import { IUser } from "../../repos/User/interfaces/IUser";
import { UserService } from "./interface/UserService";
import { OmitUserRequest } from "./types/UserTypes";

export class GetUserByIdService implements UserService {
  private readonly repo: IUser;

  constructor(repo: IUser) {
    this.repo = repo;
  }

  public async execute(
    id: number
  ): Promise<Error | OmitUserRequest<User>> {
    try {
      const user = await this.repo.getUserById({
        id,
      });

      return user;
    } catch (error) {
      throw error;
    }
  }
}
