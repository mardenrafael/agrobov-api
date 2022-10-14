import { Ox } from '@prisma/client';
import { Request, Response } from "express";

export default interface OxController {
  handle(req: Request, res: Response): Promise<void | Ox | Array<Ox>>
}

