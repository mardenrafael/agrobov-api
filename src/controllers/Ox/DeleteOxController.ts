import { Request, Response } from "express";
import { OxRepo } from "../../repos/Ox/OxRepo";
import { DeleteOxService } from "../../services/Ox";
import OxController from "./interface/OxController";

export class DeleteOxController implements OxController {
  public async handle(req: Request, res: Response): Promise<void> {
    const { id } = req.body;
    const service = new DeleteOxService(new OxRepo());

    const result = await service.execute({ id });

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
