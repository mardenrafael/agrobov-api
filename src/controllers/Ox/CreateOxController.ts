import { CreateOxService } from "./../../services/Ox/CreateOxService";
import { Request, Response } from "express";
import prisma from "../../utils/Prisma";
import OxController from "./interface/OxController";
import corsConfig from "../../utils/Cors";

export default class CreateOxController implements OxController {
  public async handle(req: Request, res: Response): Promise<void> {

    res.set(corsConfig);

    const ownerId = req.params.id;
    const { earring, born_date, genre } = req.body;
    const service = new CreateOxService(prisma);
    const result = await service.execute(
      { earring, born_date, genre },
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

