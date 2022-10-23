import { IOx } from "../../repos/Ox/interfaces/IOx";
import { TOx } from "../../repos/Ox/types/TOx";
import { OxService } from "./interface/OxService";

export class GetOxByIdService implements OxService {
  private readonly repo: IOx;

  constructor(repo: IOx) {
    this.repo = repo;
  }

  public async execute(id: number): Promise<Omit<TOx, "id"> | Error> {
    const ox = await this.repo.getOxById({ id });

    if (ox instanceof Error) {
      return new Error("Ox not found!");
    }

    return ox;
  }
}
