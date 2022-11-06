import { IOx } from "../../repos/Ox/interfaces/IOx";
import { TOx } from "../../repos/Ox/types/TOx";
import PrismaErrorHandler from "../../utils/PrismaErrorHandler";

export default class GetOxByIdService {
  private readonly repo: IOx;

  constructor(repo: IOx) {
    this.repo = repo;
  }

  public async execute(id: number): Promise<Omit<TOx, "id"> | Error> {
    try {
      const ox = await this.repo.getOxById({ id });
      return ox;
    } catch (error: any) {
      return new PrismaErrorHandler(error);
    }
  }
}
