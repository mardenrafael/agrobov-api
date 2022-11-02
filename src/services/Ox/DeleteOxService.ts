import { IOx } from "../../repos/Ox/interfaces/IOx";
import { TOx } from "../../repos/Ox/types/TOx";

export default class DeleteOxService {
  private readonly repo: IOx;

  constructor(repo: IOx) {
    this.repo = repo;
  }

  public async execute({ id }: Pick<TOx, "id">): Promise<TOx | Error> {
    try {
      const ox = await this.repo.DeleteOx({ id });

      return ox;
    } catch (error) {
      return new Error("Error on delete Ox");
    }
  }
}
