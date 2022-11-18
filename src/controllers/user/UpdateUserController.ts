import { Request, Response } from "express";
import UserRepo from "../../repos/user/UserRepo";
import { UpdateUserService } from "../../services/user";
import { IControllers } from "../interfaces/IControllers";

export default class UpdateUserController implements IControllers {
  public async handle(req: Request, res: Response): Promise<void> {
    try {
      const { name, id } = req.body;
      const service = new UpdateUserService(new UserRepo());
      const result = await service.execute({
        name,
        id,
      });

      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({
        error: error.message,
      });
    }
  }
}
