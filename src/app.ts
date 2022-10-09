import express, { Express, json } from "express";

export default class App {
  private readonly app: Express;

  constructor() {
    this.app = express();

    this.middleware();
    this.routes();
  }

  /**
   * Configura o comportamento padrão do servidor
   */
  private middleware(): void {
    this.app.use(json());
  }

  /**
   * Configura as rotas que vão ser usadas pelo servidor.
   */
  private routes(): void {}

  /**
   *Inicia o servidor
   * @param port Porta que vai ser usada
   * @param host URL que vai ser usada, nesse caso localhost
   */
  public start(port: number, host: string = "0.0.0.0") {
    this.app.listen(port, host, () => {
      console.log(`Server running on: ${host}:${port}`);
    });
  }
}

