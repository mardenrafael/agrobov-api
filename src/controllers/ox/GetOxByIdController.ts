import { Request, Response } from "express";
import { OxRepo } from "../../repos/ox/OxRepo";
import { GetOxByIdService } from "../../services/ox";

export default class GetOxByIdController {
  public async handle(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const service = new GetOxByIdService(new OxRepo());
      const result = await service.execute({ id });

      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({
        error: error.message,
      });
    }
  }
}
