import { Router } from "express";
import { LoginController } from "../controllers/auth/LoginController";

export class AuthMiddleware {
  private readonly route: Router;

  constructor() {
    this.route = Router();

    this.config();
  }

  private config() {
    this.route.post("/login", new LoginController().handle);
  }

  public export(): Router {
    return this.route;
  }
}

