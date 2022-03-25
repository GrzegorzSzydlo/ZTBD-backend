import "source-map-support/register";
import "reflect-metadata";

import * as MariaDbController from "../controllers/MariaDbController";
import { logger } from "../config/logger";
import { MariaDbDatabase } from "../orm/connection/TypeOrmConnectionFactory";

async function init() {
  await MariaDbDatabase.initialize()
    .then(async () => {
      console.log("MariaDB has been initialized!");
    })
    .catch((err) => {
      console.error("Error during MariaDB initialization", err);
    });
  console.time("maria");
  logger.info("command started");
  await MariaDbController.create();

  logger.info("command ended");
  console.timeEnd("maria");
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
