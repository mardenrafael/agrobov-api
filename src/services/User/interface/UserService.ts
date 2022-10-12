import { User } from "@prisma/client";

export default interface UserService {
  execute({}): Promise<User | Error>;
}

