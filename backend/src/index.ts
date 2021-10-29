import fastify from "fastify";
import fastifyCors from "fastify-cors";
import fastifySocketIO from "fastify-socket.io";
import { logger } from "./logger.js";
import middiePlugin from "middie";
import autoLoad from "fastify-autoload";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import dotenv from "dotenv";
import { nanoid } from "nanoid";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = fastify();

app.register(middiePlugin);
app.register(fastifyCors);
app.register(fastifySocketIO, {
  cors: {
    origin: "*"
  }
});

app.register(autoLoad, {
  dir: join(__dirname, "plugins")
});

/* app.register(autoLoad, {
  dir: join(__dirname, "routes")
}); */

app.ready((err) => {
  if (err) throw err;

  app.io.on("connect", (socket) => {
    const id = nanoid(36);

    socket.emit("userInfo", { id });
  });

  logger.info(`Listening on :${port}`);
});

const port = parseInt(process.env.PORT ?? "8080");
app.listen(port);
