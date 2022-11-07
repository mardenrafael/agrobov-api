import { Request, Response } from "express";
import UserRepo from "../../repos/User/UserRepo";
import { GetUserByEmailService } from "../../services/User";
import PrismaErrorHandler from "../../utils/PrismaErrorHandler";
import { IControllers } from "../interfaces/IControllers";

export default class GetUserByEmailController implements IControllers {
  public async handle(req: Request, res: Response): Promise<void> {
    const email = req.query.email;

    if (typeof email !== "string") {
      return;
    }

    const service = new GetUserByEmailService(new UserRepo());
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
