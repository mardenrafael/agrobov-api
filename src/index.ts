import App from "./app";

const PORT = 3030;
const HOST = "0.0.0.0";

const server = new App();

server.start(PORT, HOST);
