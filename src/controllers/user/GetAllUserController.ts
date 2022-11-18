import { Request, Response } from "express";
import UserRepo from "../../repos/user/UserRepo";
import { GetAllUserService } from "../../services";

export default class GetAllUserController {
  public async handle(req: Request, res: Response): Promise<void> {
    try {
      const { quantity } = req.body;
      const service = new GetAllUserService(new UserRepo());
      const result = await service.execute(quantity);

      res.status(200).json({
        result,
      });
    } catch (error: any) {
      res.status(400).json({
        error: error.message,
      });
    }
  }
}
