import { Request, Response } from "express";
import { DeleteOxService } from "../../services/Ox/DeleteOxService";
import prisma from "../../utils/Prisma";
import OxController from "./interface/OxController";

export class DeleteOxController implements OxController {
  public async handle(req: Request, res: Response): Promise<void> {
    const { id } = req.body;
    const service = new DeleteOxService(prisma);

    const result = await service.execute({ id });

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

