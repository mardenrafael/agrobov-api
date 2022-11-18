import { NextFunction, Request, Response } from "express";
import corsConfig from "../utils/Cors";

export default class CorsMiddleware {
  public async setCors(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    res.set(corsConfig);
    next();
  }
}
