import { CreateOxService } from "./../../services/Ox";
import { Request, Response } from "express";
import { OxRepo } from "../../repos/Ox/OxRepo";
import { IControllers } from "../interfaces/IControllers";
import PrismaErrorHandler from "../../utils/PrismaErrorHandler";

export default class CreateOxController implements IControllers {
  public async handle(req: Request, res: Response): Promise<void> {
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

    if (result instanceof PrismaErrorHandler) {
      res.status(400).json({
        error: result,
      });
      return;
    }

    res.status(200).json(result);
  }
}
