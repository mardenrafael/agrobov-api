import { Request, Response } from "express";
import UserController from "./interface/UserController";
import UserRepo from "../../repos/User/UserRepo";
import UpdateUserService from "../../services/User/UpdateUserService";

export default class UpdateUserController implements UserController{
    public async handle(req: Request, res: Response): Promise<void> {
        const {name, id} = req.body;
        const service = new UpdateUserService(new UserRepo());
        const result = await service.execute({
            name,
            id,
        });

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
