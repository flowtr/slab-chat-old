import { Logger } from "tslog";

export const logger = new Logger({
    name: "Slab Chat API",
    displayFilePath: "hidden",
    displayFunctionName: false,
    colorizePrettyLogs: true,
});
