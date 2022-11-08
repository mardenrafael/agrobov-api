import { Request, Response } from "express";
import UserRepo from "../../repos/User/UserRepo";
import { UpdateUserService } from "../../services/User";
import PrismaErrorHandler from "../../utils/PrismaErrorHandler";
import { IControllers } from "../interfaces/IControllers";

export default class UpdateUserController implements IControllers {
  public async handle(req: Request, res: Response): Promise<void> {
    const { name, id } = req.body;
    const service = new UpdateUserService(new UserRepo());
    const result = await service.execute({
      name,
      id,
    });

    if (result instanceof PrismaErrorHandler) {
      res.status(400).json({
        error: result.message,
      });
      return;
    }

    res.status(200).json(result);
  }
}
