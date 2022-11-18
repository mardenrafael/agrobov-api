import { IOx } from "../../repos/ox/interfaces/IOx";
import { TOx } from "../../repos/ox/types/TOx";

export default class CreateOxService {
  private readonly repo: IOx;

  constructor(repo: IOx) {
    this.repo = repo;
  }

  public async execute({
    ownerId,
    earring,
    born_date,
    genre,
    marked,
  }: Omit<TOx, "id" | "active">): Promise<Error | TOx> {
    try {
      const ox = await this.repo.createOx({
        earring,
        born_date,
        genre,
        marked,
        ownerId,
      });

      return ox;
    } catch (error: any) {
      return error;
    }
  }
}
