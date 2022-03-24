import * as winston from "winston";
import { consoleFormat } from "winston-console-format";
export const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple()
  ),
  exitOnError: false,
  defaultMeta: { service: "Mongo" },
  transports: new winston.transports.Console({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.colorize({ message: true, level: true }),
      winston.format.simple(),
      winston.format.padLevels(),
      consoleFormat({
        showMeta: true,
        metaStrip: ["timestamp", "service"],
        inspectOptions: {
          depth: 4,
          colors: true,
          maxArrayLength: 10,
          breakLength: 120,
          compact: true,
        },
      })
    ),
  }),
});
