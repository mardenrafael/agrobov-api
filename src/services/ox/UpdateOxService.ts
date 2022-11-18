import { IOx } from "../../repos/ox/interfaces/IOx";
import { TOx } from "../../repos/ox/types/TOx";

export default class UpdateOxServiceS {
  private readonly repo: IOx;

  constructor(repo: IOx) {
    this.repo = repo;
  }

  public async execute({
    id,
    ownerId,
    earring,
    marked,
    genre,
    born_date,
  }: Omit<TOx, "active">): Promise<TOx | Error> {
    const ox = await this.repo.updateOx(
      { id },
      {
        ownerId,
        marked,
        genre,
        earring,
        born_date,
      }
    );

    return ox;
  }
}
