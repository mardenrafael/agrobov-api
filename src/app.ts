import { Express, json } from "express";
import { Request, Response } from "express";
import  swaggerUi  from "swagger-ui-express";
import swaggerDocs from "../docs/swagger.json"

export default class App {
  private readonly app: Express;

  constructor(express: Express, port: number, host: string) {
    this.app = express;

    this.config();
    this.midleware();
    this.routes();
    this.start(port, host);
  }

  /**
   * Configura o comportamento padrão do servidor
   */
  private config(): void {
    this.app.use(json());
    this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
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
    this.app.get("/", (_req: Request, res: Response) => {
      res.json({info: "API is running"})
    })
  }

  /**
   *Inicia o servidor
   * @param port Porta que vai ser usada
   * @param host URL que vai ser usada, nesse caso localhost
   */
  private start(port: number, host: string = "0.0.0.0") {
    this.app.listen(port, host, () => {
      console.log(`Server running on: ${host}:${port}`);
    });
  }
}

