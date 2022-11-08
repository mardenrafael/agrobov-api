import { IOx } from "../../repos/Ox/interfaces/IOx";
import { TOx } from "../../repos/Ox/types/TOx";

export default class GetOxByIdService {
  private readonly repo: IOx;

  constructor(repo: IOx) {
    this.repo = repo;
  }

  public async execute({ id }: Pick<TOx, "id">): Promise<TOx | Error> {
    const ox = await this.repo.getOxById({ id });
    return ox;
  }
}
