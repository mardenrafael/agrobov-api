import { Request, Response } from "express";
import { LoginService } from "../../services/auth/LoginService";
import prisma from "../../utils/Prisma";

export class LoginController {
  async handle(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;
    const service = new LoginService(prisma);
    const result = await service.execute({
      email,
      password,
    });

    if (result instanceof Error) {
      res.status(401).json({
        error: result.message,
      });

      return;
    }

    res.status(200).json({
      token: result,
    });
  }
}

