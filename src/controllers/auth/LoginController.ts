import { Request, Response } from "express";
import { LoginService } from "../../services/auth/LoginService";
import prisma from "../../utils/Prisma";
import corsConfig from "../../utils/Cors";

export class LoginController {
  async handle(req: Request, res: Response): Promise<void> {
    try {
      res.set(corsConfig);

      const { email, password } = req.body;
      const service = new LoginService(prisma);
      const result = await service.execute({
        email,
        password,
      });

      console.log("result", result);
      res.status(200).json({
        token: result,
      });
    } catch (error: any) {
      res.status(401).json({
        error: error.message,
      });
    }
  }
}
