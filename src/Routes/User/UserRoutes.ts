import { LoginController } from "./../../controllers/auth/LoginController";
import { Router } from "express";
import CreateUserController from "../../controllers/User/CreateUserController";
import GetUserByIdController from "../../controllers/User/GetUserByIdController";
import { ValidateLogin } from "../../middlewares/ValidateLoginMiddleware";
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
      new CorsMiddleware().setCors,
      new ValidateLogin().validate,
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

    this.router.put(
      "/user",     // Create class to Update
      new CorsMiddleware().setCors,
      new ValidateLogin().validate,
      new CreateUserController().handle
    );

    this.router.delete(
      "/user",   // Create class to delete
      new CorsMiddleware().setCors,
      new ValidateLogin().validate,
      new CreateUserController().handle
    );

  }

  public export(): Router {
    return this.router;
  }
}
