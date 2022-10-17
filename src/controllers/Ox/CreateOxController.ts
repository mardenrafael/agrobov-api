import { CreateOxService } from "./../../services/Ox/CreateOxService";
import { Request, Response } from "express";
import prisma from "../../utils/Prisma";
import OxController from "./interface/OxController";

export default class CreateOxController implements OxController {
  public async handle(req: Request, res: Response): Promise<void> {
    const ownerId = req.params.id;
    const { earring, born_date, genre } = req.body;
    const date = new Date(born_date);
    const service = new CreateOxService(prisma);
    const result = await service.execute(
      {
        earring,
        born_date: date,
        genre,
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
