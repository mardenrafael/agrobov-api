import { TUser } from "../../repos/Types/TUser";

export interface IUser {
  getUserById(): Promise<void>;
  createUser({
    name,
    brand,
    email,
    password,
  }: TUser): Promise<TUser | Error>;
}
