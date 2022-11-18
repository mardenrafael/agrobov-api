import { LoginController } from "../../controllers/auth";
import { Router } from "express";
import { ValidateLogin, CorsMiddleware } from "../../middlewares";
import {
  DeleteUserController,
  UpdateUserController,
  GetAllUserController,
  CreateUserController,
  GetUserByEmailController,
} from "../../controllers/user/";

export default class UserRoutes {
  private readonly router: Router;

  constructor() {
    this.router = Router();

    this.config();
  }

  private config(): void {
    this.router.get(
      "/user",
      new CorsMiddleware().setCors,
      new ValidateLogin().validate,
      new GetUserByEmailController().handle
    );
    this.router.get(
      "/users",
      new CorsMiddleware().setCors,
      new ValidateLogin().validate,
      new GetAllUserController().handle
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
      "/user",
      new CorsMiddleware().setCors,
      new ValidateLogin().validate,
      new UpdateUserController().handle
    );

    this.router.delete(
      "/user",
      new CorsMiddleware().setCors,
      new ValidateLogin().validate,
      new DeleteUserController().handle
    );
  }

  public export(): Router {
    return this.router;
  }
}
