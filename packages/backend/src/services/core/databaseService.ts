import { inject, injectable } from "tsyringe";
import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "../../models/user.js";
import { ConfigService } from "./configService.js";

@injectable()
export class DatabaseService {
  protected readonly dataSource: DataSource;

  constructor(@inject(ConfigService) protected readonly config: ConfigService) {
    this.dataSource = new DataSource({
      ...config.config.database,
      entities: [User]
    } as DataSourceOptions);
  }

  get db() {
    return this.dataSource.manager;
  }
}
