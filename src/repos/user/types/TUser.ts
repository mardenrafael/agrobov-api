import { User } from "@prisma/client";

export type TUser = Omit<
  User,
  "active" | "updated_at" | "created_at" | "deleted_at" | "brand"
>;
