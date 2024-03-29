import { CreateOxService } from "../../services";
import { Request, Response } from "express";
import { OxRepo } from "../../repos/ox/OxRepo";

export default class CreateOxController {
  public async handle(req: Request, res: Response): Promise<void> {
    try {
      const ownerId = Number(req.params.id);
      const { earring, born_date, genre, marked } = req.body;
      const date = new Date(born_date);
      const service = new CreateOxService(new OxRepo());
      const result = await service.execute({
        ownerId,
        earring,
        born_date: date,
        genre,
        marked,
      });

      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({
        error: error.message,
      });
    }
  }
}
