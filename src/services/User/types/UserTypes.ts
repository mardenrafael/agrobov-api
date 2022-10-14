export type RequestCreateUser = {
  name: string;
  email: string;
  passWord: string;
};

export type OmitUserRequest<User> = Omit<
  User,
  "id" | "password" | "created_at" | "updated_at"
> | null;

