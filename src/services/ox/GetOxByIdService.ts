import { IOx } from "../../repos/ox/interfaces/IOx";
import { TOx } from "../../repos/ox/types/TOx";

export default class GetOxByIdService {
  private readonly repo: IOx;

  constructor(repo: IOx) {
    this.repo = repo;
  }

  public async execute({ id }: Pick<TOx, "id">): Promise<TOx | Error> {
    try {
      const ox = await this.repo.getOxById({ id });
      return ox;
    } catch (error: any) {
      throw error;
    }
  }
}
