import { TUser } from "../Types/TUser";

export interface IUser {
  getUserById({ id }: TUser): Promise<TUser>;
  createUser({
    name,
    brand,
    email,
    password,
  }: Omit<TUser, "id">): Promise<Omit<TUser, "id">>;
}
