import { User } from "@prisma/client";
import { OmitUserRequest } from "../types/UserTypes";

export interface UserService {
  execute({}): Promise<OmitUserRequest<User> | Error>;
}

