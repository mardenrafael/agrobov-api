import { Request, Response } from "express";
import UserRepo from "../../repos/User/UserRepo";
import { GetUserByEmailService } from "../../services/User";
import UserController from "./interface/UserController";

export default class GetUserByEmailController implements UserController {
  public async handle(req: Request, res: Response): Promise<void> {
    const email = req.query.email;

    if (typeof email !== "string") {
      return;
    }

    const service = new GetUserByEmailService(new UserRepo());
    const result = await service.execute({ email });

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
