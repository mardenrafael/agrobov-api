import { Request, Response } from "express";
import { GetUserByEmailService } from "../../services/User/GetUserByEmailService";
import prisma from "../../utils/Prisma";
import UserController from "./interface/UserController";

export default class GetUserByEmailController implements UserController {
  public async handle(req: Request, res: Response): Promise<void> {
    const email = req.query.email;

    if(typeof email !== "string") {
      return
    }

    const service = new GetUserByEmailService(prisma);
    const result = await service.execute(email);

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
