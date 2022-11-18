import { Request, Response } from "express";
import { LoginService } from "../../services/auth";
import prisma from "../../utils/Prisma";
import corsConfig from "../../utils/Cors";

export default class LoginController {
  public async handle(req: Request, res: Response): Promise<void> {
    try {
      res.set(corsConfig);

      const { email, password } = req.body;
      const service = new LoginService(prisma);
      const result = await service.execute({
        email,
        password,
      });

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
