import { Oxgenre } from "@prisma/client";

export type RequestCreateOx = {
  earring: string;
  born_date: Date;
  genre: Oxgenre;
};
