import { Request, Response } from "express";
import UserRepo from "../../repos/User/UserRepo";
import { GetUserByIdService } from "../../services/User/GetUserByIdService";
import prisma from "../../utils/Prisma";
import UserController from "./interface/UserController";

export default class GetUserByIdController implements UserController {
  public async handle(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const service = new GetUserByIdService(new UserRepo(prisma));
    const result = await service.execute(Number(id));

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
