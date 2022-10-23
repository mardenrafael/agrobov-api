import { TUser } from "../types/TUser";

export interface IUser {
  getUserById({
    id,
  }: Pick<TUser, "id">): Promise<Omit<TUser, "id" | "password"> | Error>;
  createUser({
    name,
    brand,
    email,
    password,
  }: Omit<TUser, "id">): Promise<Omit<TUser, "id"> | Error>;
  updateUser({
    name,
    id,
  }: Partial<Pick<TUser, "name" | "id">>): Promise<
    Omit<TUser, "id" | "password"> | Error
  >;
}
