import { CreateOxService } from "./../../services/Ox/CreateOxService";
import { Request, Response } from "express";
import OxController from "./interface/OxController";
import { OxRepo } from "../../repos/Ox/OxRepo";

export default class CreateOxController implements OxController {
  public async handle(req: Request, res: Response): Promise<void> {
    const ownerId = req.params.id;
    const { earring, born_date, genre, marked } = req.body;
    const date = new Date(born_date);
    const service = new CreateOxService(new OxRepo());
    const result = await service.execute(
      {
        earring,
        born_date: date,
        genre,
        marked,
      },
      Number(ownerId)
    );

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
