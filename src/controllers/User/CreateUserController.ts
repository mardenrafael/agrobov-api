import { Request, Response } from "express";
import { CreateUserService } from "../../services/User";
import prisma from "../../utils/Prisma";
import UserController from "./interface/UserController";

export default class CreateUserController implements UserController {
  public async handle(req: Request, res: Response): Promise<void> {
    const { name, email, password, brand } = req.body;
    const service = new CreateUserService(prisma);
    const result = await service.execute({
      name,
      email,
      passWord: password,
      brand,
    });

    if (result instanceof Error) {
      res.status(400).json({
        error: result.message,
      });
      return;
    }

    res.status(200).json({
      result,
    });
  }
}
