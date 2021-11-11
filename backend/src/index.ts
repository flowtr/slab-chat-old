import { logger } from "./logger.js";
import { MongoSteel } from "mongosteel";
import config from "./config.js";
import fastifyCors from "fastify-cors";
import fastify from "fastify";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import autoLoad from "fastify-autoload";
import { existsSync } from "fs";
/* import { tinyws, TinyWSRequest } from "tinyws";
import type { WebSocket } from "ws";
import { nanoid } from "nanoid";
import { createId } from "./util/id.js";
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

await MongoSteel.connect(config.dbUri);

const app = fastify();

if (existsSync(join(__dirname, "routes")))
  await app.register(autoLoad, {
    dir: join(__dirname, "routes")
  });

await app.register(fastifyCors, {});

const port = parseInt(process.env.PORT ?? "8080");
app.listen(port, "0.0.0.0", () => {
  logger.info(`Listening on :${port}`);
});
