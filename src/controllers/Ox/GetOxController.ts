import { Request, Response } from "express";
import { GetOxService } from "../../services/Ox/GetOxService";
import { Ox } from "@prisma/client";
import prisma from "../../utils/Prisma";
import OxController from "./interface/OxController";
import corsConfig from "../../utils/Cors";

export default class GetOxController implements OxController {
  public async handle(req: Request, res: Response): Promise<void | Ox | Array<Ox>> {

    res.set(corsConfig);

    const ox_owner = req.params.id;
    const service = new GetOxService(prisma);
    const result = await service.execute(Number(ox_owner))

    if(result instanceof Error) {
      res.status(400).json({
        error: result.message
        }
      )
      return
    }
    res.status(200).json(result)

    return result
  }
}
