import { Request, Response } from "express";
import UserRepo from "../../repos/user/UserRepo";
import { UpdateUserPasswordService } from "../../services/user";

export default class UpdateUserPasswordController {
  public async handle(req: Request, res: Response): Promise<void> {
    try {
      const { id, password } = req.body;
      const service = new UpdateUserPasswordService(new UserRepo());
      const result = await service.execute({ id, password });

      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({
        error: error.message,
      });
    }
  }
}
