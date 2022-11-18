import { Request, Response } from "express";
import UserRepo from "../../repos/User/UserRepo";
import { CreateUserService } from "../../services/user";
import { IControllers } from "../interfaces/IControllers";

export default class CreateUserController implements IControllers {
  public async handle(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password } = req.body;
      const service = new CreateUserService(new UserRepo());
      const result = await service.execute({
        name,
        email,
        password,
      });

      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({
        error: error.message,
      });
    }
  }
}
