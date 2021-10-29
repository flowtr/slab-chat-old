import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";
import pgPromise from "pg-promise";
import config from "../config.js";

declare module "fastify" {
  export interface FastifyInstance {
    db: ReturnType<ReturnType<typeof pgPromise>>;
  }
}

export default fp(
  async (app: FastifyInstance, opts: unknown, next: () => void) => {
    const pgp = pgPromise();
    const db = pgp(config.postgresUri);

    app.decorate("db", db);

    next();
  }
);
