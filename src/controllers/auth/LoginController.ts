import { Request, Response } from "express";
import { LoginService } from "../../services";
import prisma from "../../utils/Prisma";

export default class LoginController {
  public async handle(req: Request, res: Response): Promise<void> {
    try {
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
