import { Request, Response } from "express";
import { OxRepo } from "../../repos/ox/OxRepo";
import { UpdateOxServiceS } from "../../services";
import PrismaErrorHandler from "../../utils/PrismaErrorHandler";

export default class UpdateOxController {
  public async handle(req: Request, res: Response): Promise<void> {
    const service = new UpdateOxServiceS(new OxRepo());
    const { id, ownerId, earring, marked, genre, born_date } = req.body;

    const result = await service.execute({
      id,
      ownerId,
      earring,
      marked,
      genre,
      born_date,
    });

    if (result instanceof PrismaErrorHandler) {
      res.status(400).json({
        error: result.message,
      });
      return;
    }

    res.status(200).json(result);
  }
}
