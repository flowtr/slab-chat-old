import { injectable } from "tsyringe";
import TOML from "@ltd/j-toml";
import { z } from "zod";
import { readFile } from "fs/promises";

export const configSchema = z.object({
  database: z.object({
    type: z.string().nonempty(),
    host: z.string().nonempty(),
    port: z.number(),
    username: z.string().nonempty(),
    password: z.string().nonempty(),
    database: z.string().nonempty()
  })
});

export type IConfig = z.infer<typeof configSchema>;

@injectable()
export class ConfigService {
  protected configuration!: IConfig;

  async load(file: string) {
    this.configuration = await configSchema.parseAsync(
      TOML.parse(await readFile(file, "utf8"))
    );
  }

  get config() {
    return this.configuration;
  }
}
