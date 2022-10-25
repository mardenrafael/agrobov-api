import { Request, Response } from "express";
import { OxRepo } from "../../repos/Ox/OxRepo";
import { GetOxByIdService } from "../../services/Ox/GetOxByIdService";
import OxController from "./interface/OxController";

export default class GetOxByIdController implements OxController {
  public async handle(req: Request, res: Response): Promise<void> {
    const oxId = req.params.id;
    const service = new GetOxByIdService(new OxRepo());
    const result = await service.execute(Number(oxId));

    if (result instanceof Error) {
      res.status(400).json({
        error: result.message,
      });
      return;
    }
    res.status(200).json({ result });
  }
}
