import express, { Express, json } from "express";

export default class App {
  readonly app: Express;

  constructor() {
    this.app = express();

    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.app.use(json());
  }

  private routes(): void {}

  public start(port: number, host: string) {
    this.app.listen(port, host, () => {
      console.log(`Server running on: ${host}:${port}`);
    });
  }
}
