import { TUser } from "../types/TUser";

export interface IUser {
  getUserById({ id }: TUser): Promise<TUser>;
  createUser({
    name,
    brand,
    email,
    password,
  }: Omit<TUser, "id">): Promise<TUser>;
}
