import express from "express";
import http from "http";
import SocketIO from "socket.io";
import cors from "cors";
import { logger } from "./logger";

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new SocketIO.Server(server);

io.on("connection", () => {
    logger.info("A client connected");
});

const port = process.env.PORT ?? 8080;
server.listen(port, () => {
    console.log(`Listening on :${port}`);
});
