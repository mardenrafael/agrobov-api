import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export default class ValidateLoginMiddleware {
  public async validate(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const token = req.headers.authorization;

    if (!token) {
      res.status(401).json({
        Error: "No Token provide!",
      });
      return;
    }

    const hasBearer = token?.includes("Bearer");

    if (!hasBearer) {
      res.status(401).json({
        Error: "Invalid token",
      });

      return;
    }

    const JWTtoken = token.split("Bearer ")[1];

    try {
      jwt.verify(JWTtoken, process.env.JWT_SECRET!) as any;

      next();
    } catch (err) {
      res.status(401).json({
        Error: "Unhautorized",
      });

      return;
    }
  }
}
