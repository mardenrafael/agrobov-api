import { Request, Response } from "express";
import { OxRepo } from "../../repos/Ox/OxRepo";
import { DeleteOxService } from "../../services/Ox";
import PrismaErrorHandler from "../../utils/PrismaErrorHandler";
import { IControllers } from "../interfaces/IControllers";

export class DeleteOxController implements IControllers {
  public async handle(req: Request, res: Response): Promise<void> {
    const { id } = req.body;
    const service = new DeleteOxService(new OxRepo());

    const result = await service.execute({ id });

    if (result instanceof PrismaErrorHandler) {
      res.status(400).json({
        error: result.message,
      });
      return;
    }
    res.status(200).json(result);
  }
}
