import { App } from "@tinyhttp/app";
import { cors } from "@tinyhttp/cors";
import { logger } from "./logger.js";
import { logger as loggerMiddleware } from "@tinyhttp/logger";
import { json } from "milliparsec";
const app = new App();
app.use(cors()).use(loggerMiddleware()).use(json());

const port = parseInt(process.env.PORT ?? "8080");
app.listen(port, () => {
  logger.info(`Listening on :${port}`);
});
