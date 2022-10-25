import { Oxgenre } from "@prisma/client";

export type RequestCreateOx = {
  earring: string;
  marked: boolean;
  born_date: Date;
  genre: Oxgenre;
};
