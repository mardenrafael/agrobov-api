import { Request, Response } from "express";

export interface IControllers {
  handle(req: Request, res: Response): Promise<void>;
}
