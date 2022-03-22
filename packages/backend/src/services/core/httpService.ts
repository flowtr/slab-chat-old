import { App } from "@tinyhttp/app";
import { json } from "milliparsec";
import { cors } from "@tinyhttp/cors";
import { inject, injectable } from "tsyringe";
import { LoggingService } from "./loggerService";

@injectable()
export class HttpService {
  protected readonly app = new App();

  constructor(
    @inject(LoggingService) protected readonly logging: LoggingService
  ) {
    this.app.use(cors());
    this.app.use(json());
  }

  async run() {
    const port = parseInt(process.env.PORT ?? "8080");
    this.app.listen(port, () =>
      this.logging.getLogger().info(`Listening on :${port}`)
    );
  }
}
