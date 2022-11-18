import { Request, Response } from "express";
import UserRepo from "../../repos/User/UserRepo";
import { GetUserByEmailService } from "../../services/user";
import { IControllers } from "../interfaces/IControllers";

export default class GetUserByEmailController implements IControllers {
  public async handle(req: Request, res: Response): Promise<void> {
    try {
      const email = req.query.email;

      if (typeof email !== "string") {
        return;
      }

      const service = new GetUserByEmailService(new UserRepo());
      const result = await service.execute({ email });

      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({
        error: error.message,
      });
    }
  }
}
