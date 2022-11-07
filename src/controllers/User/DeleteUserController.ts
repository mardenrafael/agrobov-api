import { Request, Response } from "express";
import UserRepo from "../../repos/User/UserRepo";
import { DeleteUserService } from "../../services/User";
import PrismaErrorHandler from "../../utils/PrismaErrorHandler";
import { IControllers } from "../interfaces/IControllers";

export class DeleteUserController implements IControllers {
  public async handle(req: Request, res: Response): Promise<void> {
    const service = new DeleteUserService(new UserRepo());
    const { email } = req.body;

    const result = await service.execute({ email });

    if (result instanceof PrismaErrorHandler) {
      res.status(400).json({
        error: result.message,
      });
      return;
    }

    res.status(200).json(result);
  }
}
