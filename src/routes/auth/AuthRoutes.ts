import { Router } from "express";
import { LoginController } from "../../controllers";
import { CorsMiddleware } from "../../middlewares";

export class Auth {
  private readonly route: Router;

  constructor() {
    this.route = Router();

    this.config();
  }

  private config() {
    this.route.post(
      "/login",
      new CorsMiddleware().setCors,
      new LoginController().handle
    );
  }

  public export(): Router {
    return this.route;
  }
}
