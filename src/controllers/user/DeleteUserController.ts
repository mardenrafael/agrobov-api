import { Request, Response } from "express";
import UserRepo from "../../repos/user/UserRepo";
import { DeleteUserService } from "../../services";

export default class DeleteUserController {
  public async handle(req: Request, res: Response): Promise<void> {
    try {
      const service = new DeleteUserService(new UserRepo());
      const { email } = req.body;

      const result = await service.execute({ email });

      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({
        error: error.message,
      });
    }
  }
}
