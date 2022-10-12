import { Request, Response } from "express";
import { GetUserByIdService } from "../../services/User/GetUserByIdService";
import prisma from "../../utils/Prisma";
import UserController from "./interface/UserController";

export default class GetUserByIdController implements UserController {
  public async handle(req: Request, res: Response): Promise<void> {
    const { id } = req.body;
    const service = new GetUserByIdService(prisma);
    const result = await service.execute(id);

    if (result instanceof Error) {
      res.status(400).json({
        error: result.name,
        message: result.message,
      });
      return;
    }

    res.status(200).json({
      result,
    });
  }
}

