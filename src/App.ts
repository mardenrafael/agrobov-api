import { Express, json } from "express";
import cors from "cors";
import { Auth } from "./routes/auth/AuthRoutes";
import OxRoutes from "./routes/ox/OxRoutes";
import UserRoutes from "./routes/user/UserRoutes";
import limiter from "./utils/Limiter";

export default class App {
  private readonly app: Express;
  private readonly port: number;

  constructor(express: Express, port: number) {
    this.app = express;
    this.port = port;

    this.config();
    this.midleware();
    this.routes();
  }

  /**
   * Configura o comportamento padrão do servidor
   */
  private config(): void {
    this.app.use(json());
    this.app.use(cors());
    this.app.use(limiter);
  }

  /**
   * Configura as rotas de midlewares
   *
   * @example midleware() {
   *  // midRoute é uma rota de proteção que so permite a passagem para usuarios autorizados
   *  this.app.use(midRoute)
   * }
   */
  private midleware(): void {}

  /**
   * Configura as rotas que vão ser usadas pelo servidor.
   *
   * @example routes() {
   *  this.app.use(UserRoute)
   * }
   */
  private routes(): void {
    this.app.use(new Auth().export());
    this.app.use(new UserRoutes().export());
    this.app.use(new OxRoutes().export());
  }

  /**
   *Inicia o servidor
   */
  public start() {
    this.app.listen(this.port, () => {
      console.log(`Server running on: ${this.port}`);
    });
  }
}
