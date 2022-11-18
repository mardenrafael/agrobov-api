import { Request, Response } from "express";
import { OxRepo } from "../../repos/ox/OxRepo";
import { DeleteOxService } from "../../services";

export default class DeleteOxController {
  public async handle(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.body;
      const service = new DeleteOxService(new OxRepo());
      const result = await service.execute({ id });

      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({
        error: error.message,
      });
    }
  }
}
