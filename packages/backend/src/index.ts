import "@abraham/reflection";
import { container } from "tsyringe";
import { ConfigService } from "./services/core/configService.js";
import { HttpService } from "./services/core/httpService.js";

container.resolve(ConfigService).load("config.toml");
container.resolve(HttpService).run();
