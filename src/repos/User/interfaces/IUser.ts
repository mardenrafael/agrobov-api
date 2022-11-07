import { TUser } from "../types/TUser";

export interface IUser {
  getUserByEmail({
    email,
  }: Pick<TUser, "email">): Promise<
    Omit<TUser, "id" | "password"> | Error
  >;
  createUser({
    name,
    email,
    password,
  }: Omit<TUser, "id">): Promise<Omit<TUser, "id" | "password"> | Error>;
  updateUser({
    name,
    id,
  }: Partial<Pick<TUser, "name" | "id">>): Promise<
    Omit<TUser, "id" | "password"> | Error
  >;
  deleteUser({
    email,
  }: Pick<TUser, "email">): Promise<
    Error | Omit<TUser, "password" | "id">
  >;
}
