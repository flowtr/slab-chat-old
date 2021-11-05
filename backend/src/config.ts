import { logger } from "./logger.js";
import dotenv from "dotenv";

dotenv.config({
  path: `../.env.${process.env.NODE_ENV}`
});

const loadEnv = (key: string) => {
  const envVar = process.env[key];

  if (!envVar) {
    logger.error(`Must include ${key} as an environment variable`);
    process.exit(1);
  }

  return envVar;
};

const config = {
  dbUri: loadEnv("DB_URI"),
  jwtSecret: loadEnv("JWT_SECRET")
};

export default config;
