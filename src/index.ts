import "dotenv/config";
import App from "./app";

const PORT = parseInt(process.env.PORT!);

const server = new App();

server.start(PORT);

