import { logger } from "./logger.js";

const loadEnv = (key: string) => {
  const envVar = process.env[key];

  if (!envVar) {
    logger.error(`Must include ${key} as an environment variable`);
    process.exit(1);
  }

  return envVar;
};

const config = {
  postgresUri: loadEnv("DB_URI")
};

export default config;
