import { Request, Response } from "express";
import { OxRepo } from "../../repos/Ox/OxRepo";
import { GetOxByIdService } from "../../services/Ox";
import { IControllers } from "../interfaces/IControllers";

export default class GetOxByIdController implements IControllers {
  public async handle(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    const service = new GetOxByIdService(new OxRepo());
    const result = await service.execute({ id });

    if (result instanceof Error) {
      res.status(400).json({
        error: result.message,
      });
      return;
    }
    res.status(200).json(result);
  }
}
