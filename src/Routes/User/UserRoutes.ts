import { LoginController } from "./../../controllers/auth/LoginController";
import { Router } from "express";
import CreateUserController from "../../controllers/User/CreateUserController";
import GetUserByIdController from "../../controllers/User/GetUserByIdController";
import { ValidateLogin } from "../../services/auth/ValidateLoginService";
import { CorsMiddleware } from "../../middlewares/CorsMiddleware";

export default class UserRoutes {
  private readonly router: Router;

  constructor() {
    this.router = Router();

    this.config();
  }

  private config(): void {
    this.router.get(
      "/user/:id",
      new ValidateLogin().validate,
      new CorsMiddleware().setCors,
      new GetUserByIdController().handle
    );
    this.router.get(
      "/login",
      new CorsMiddleware().setCors,
      new LoginController().handle
    );
    this.router.post(
      "/user",
      new CorsMiddleware().setCors,
      new CreateUserController().handle
    );
  }

  public export(): Router {
    return this.router;
  }
}
