import { Request, Response } from "express";
import UserRepo from "../../repos/User/UserRepo";
import { GetAllUserService } from "../../services/User";
import PrismaErrorHandler from "../../utils/PrismaErrorHandler";
import { IControllers } from "../interfaces/IControllers";

export default class GetAllUserController implements IControllers {
  public async handle(req: Request, res: Response): Promise<void> {
    const { quantity } = req.body;
    const service = new GetAllUserService(new UserRepo());
    const result = await service.execute(quantity);

    if (result instanceof PrismaErrorHandler) {
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
