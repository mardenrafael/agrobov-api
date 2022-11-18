import { Router } from "express";
import { ValidateLogin, CorsMiddleware } from "../../middlewares";
import {
  DeleteOxController,
  CreateOxController,
  GetOxByIdController,
  UpdateOxController,
} from "../../controllers/ox";

export default class OxRoutes {
  private readonly router: Router;

  constructor() {
    this.router = Router();

    this.config();
  }

  private config(): void {
    this.router.get(
      "/user/:id/ox",
      new CorsMiddleware().setCors,
      new ValidateLogin().validate,
      new GetOxByIdController().handle
    );
    this.router.post(
      "/user/:id/ox",
      new CorsMiddleware().setCors,
      new ValidateLogin().validate,
      new CreateOxController().handle
    );
    this.router.delete(
      "/user/ox",
      new CorsMiddleware().setCors,
      new ValidateLogin().validate,
      new DeleteOxController().handle
    );
    this.router.put(
      "/user/ox",
      new CorsMiddleware().setCors,
      new ValidateLogin().validate,
      new UpdateOxController().handle
    );
  }

  public export(): Router {
    return this.router;
  }
}
