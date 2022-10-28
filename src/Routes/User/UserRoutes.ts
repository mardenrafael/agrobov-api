import { LoginController } from "./../../controllers/auth/LoginController";
import { Router } from "express";
import CreateUserController from "../../controllers/User/CreateUserController";
import GetUserByEmailController from "../../controllers/User/GetUserByEmailController";
import { ValidateLogin } from "../../middlewares/ValidateLoginMiddleware";
import { CorsMiddleware } from "../../middlewares/CorsMiddleware";
import { DeleteUserController } from "../../controllers/User/DeleteUserController";
import UpdateUserController from "../../controllers/User/UpdateUserController";

export default class UserRoutes {
  private readonly router: Router;

  constructor() {
    this.router = Router();

    this.config();
  }

  private config(): void {
    this.router.get(
      "/user/",
      new CorsMiddleware().setCors,
      new ValidateLogin().validate,
      new GetUserByEmailController().handle
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
      "/user", // Create class to Update
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
