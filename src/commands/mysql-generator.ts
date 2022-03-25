import "source-map-support/register";
import "reflect-metadata";

import * as MySqlController from "../controllers/MySqlController";
import { logger } from "../config/logger";
import { MySqlDatabase } from "../orm/connection/TypeOrmConnectionFactory";

async function init() {
  await MySqlDatabase.initialize()
    .then(() => {
      console.log("MySql database has been initialized!");
    })
    .catch((err) => {
      console.error("Error during MySql database initialization", err);
    });

  console.time("mysql");
  logger.info("command started");
  await MySqlController.create();

  logger.info("command ended");
  console.timeEnd("mysql");
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
