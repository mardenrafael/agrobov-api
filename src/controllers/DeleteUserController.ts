import { Request, Response } from "express";
import UserRepo from "../repos/User/UserRepo";
import DeleteUserService from "../services/User/DeleteUserService";
import prisma from "../utils/Prisma";

export class DeleteUserController {
  public async handle(req: Request, res: Response): Promise<void> {
    const service = new DeleteUserService(new UserRepo(prisma));
    const { email } = req.body;

    const result = await service.execute({ email });

    if (result instanceof Error) {
      res.status(400).json({
        error: result.message,
      });
      return;
    }

    res.status(200).json({
      result: result,
    });
  }
}
