import "source-map-support/register";
import "reflect-metadata";

import * as MongoDbController from "../controllers/MongoDbController";
import { logger } from "../config/logger";

async function init() {
  logger.info("command started");

  logger.info("command ended");
}

init()
  .catch((err) => {
    logger.error(err.message, err);
  })
  .finally(() => {
    process.exit();
  });

setInterval(() => {
  // do nothing
}, 1000 * 60);
