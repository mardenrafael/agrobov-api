import { LoginController } from './../../controllers/auth/LoginController';
import { Router } from "express";
import CreateUserController from "../../controllers/User/CreateUserController";
import GetUserByIdController from "../../controllers/User/GetUserByIdController";
import { ValidateLogin } from '../../services/auth/ValidateLoginService';

export default class UserRoutes {
  private readonly router: Router;

  constructor() {
    this.router = Router();

    this.config();
  }

  private config(): void {
    this.router.get("/user/:id", new ValidateLogin().validate, new GetUserByIdController().handle);
    this.router.get("/login", new LoginController().handle);
    this.router.post("/user", new CreateUserController().handle);
  }

  public export(): Router {
    return this.router;
  }
}

