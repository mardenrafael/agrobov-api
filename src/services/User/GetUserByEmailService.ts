import { User } from "@prisma/client";
import { IUser } from "../../repos/User/interfaces/IUser";
import { UserService } from "./interface/UserService";
import { OmitUserRequest } from "./types/UserTypes";

export class GetUserByEmailService implements UserService {
  private readonly repo: IUser;

  constructor(repo: IUser) {
    this.repo = repo;
  }

  public async execute(
    email: string
  ): Promise<Error | OmitUserRequest<User>> {
      const user = await this.repo.getUserById({
        email
      });

      return user;
    } catch (error) {
      throw error;
    }
  }
}
