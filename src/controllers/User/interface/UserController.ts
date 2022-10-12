import { Request, Response } from "express";

export default interface UserController {
  handle(req: Request, res: Response): Promise<void>;
}

