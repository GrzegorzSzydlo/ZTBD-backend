import "source-map-support/register";
import "reflect-metadata";

import * as MongoDbController from "../../controllers/MongoDbController";
import { logger } from "../../config/logger";
import { MongoDbDatabase } from "../connection/TypeOrmConnectionFactory";

async function init() {
  MongoDbDatabase.initialize()
    .then(async () => {
      console.log("MongoDB has been initialized!");
    })
    .catch((err) => {
      console.error("Error during MongoDB initialization", err);
    });
  logger.info("command started");
  await MongoDbController.createTerms();

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
