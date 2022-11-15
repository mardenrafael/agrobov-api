import { TUser } from "../types/TUser";

export interface IUser {
  getAllUser(maxQtd: number): Promise<TUser[] | Error>;

  getUserByEmail({
    email,
  }: Pick<TUser, "email">): Promise<Omit<TUser, "password"> | Error>;
  createUser({
    name,
    email,
    password,
  }: Omit<TUser, "id">): Promise<Omit<TUser, "password"> | Error>;
  updateUser({
    name,
    id,
  }: Partial<Pick<TUser, "name" | "id">>): Promise<
    Omit<TUser, "password"> | Error
  >;
  deleteUser({
    email,
  }: Pick<TUser, "email">): Promise<Error | Omit<TUser, "password">>;
}
