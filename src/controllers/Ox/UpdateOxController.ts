import { Request, Response } from "express";
import { UpdateOxServiceS } from "../../services/Ox/UpdateOxService";
import prisma from "../../utils/Prisma";
import OxController from "./interface/OxController";

export class UpdateOxController implements OxController {
  public async handle(req: Request, res: Response): Promise<void> {
    const service = new UpdateOxServiceS(prisma);
    const { id, ownerId, earring, marked, genre, born_date } = req.body;

    const result = await service.execute({
      id,
      ownerId,
      earring,
      marked,
      genre,
      born_date,
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
