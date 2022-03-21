import { Logger } from "tslog";
import { injectable } from "tsyringe";

@injectable()
export class LoggingService {
  protected readonly logger = new Logger({
    name: "Slab Chat API",
    displayFilePath: "hidden",
    displayFunctionName: false,
    colorizePrettyLogs: true
  });

  getLogger() {
    return this.logger;
  }
}
