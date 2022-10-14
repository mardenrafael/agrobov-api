import { Router } from "express" 
import GetOxController from "../../controllers/Ox/GetOxController"

export default class OxRoutes {
  private readonly router: Router;
  
  constructor() {
    this.router = Router();

    this.config();
  }

  private config(): void {
    this.router.get("/ox/:id", new GetOxController().handle);
  }

  public export(): Router {
    return this.router;
  }
}
