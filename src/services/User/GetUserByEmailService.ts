import { User } from "@prisma/client";
import { IUser } from "../../repos/User/interfaces/IUser";
import { OmitUserRequest } from "./types/UserTypes";

export class GetUserByEmailService {
  private readonly repo: IUser;

  constructor(repo: IUser) {
    this.repo = repo;
  }

  public async execute(
    email: string
  ): Promise<Error | OmitUserRequest<User>> {
    try {
      const user = await this.repo.getUserByEmail({
        email,
      });

      return user;
    } catch (error) {
      throw error;
    }
  }
}
