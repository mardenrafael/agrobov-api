import { Router } from "express";
import GetOxController from "../../controllers/Ox/GetOxController";
import CreateOxController from "../../controllers/Ox/CreateOxController";
import { ValidateLogin } from "../../services/auth/ValidateLoginService";
import { CorsMiddleware } from "../../middlewares/CorsMiddleware";

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
      new GetOxController().handle
    );
    this.router.post(
      "/user/:id/ox",
      new CorsMiddleware().setCors,
      new ValidateLogin().validate,
      new CreateOxController().handle
    );
  }

  public export(): Router {
    return this.router;
  }
}
