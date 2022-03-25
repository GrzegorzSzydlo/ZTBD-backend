import "reflect-metadata";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { router } from "./src/routes";
import { appConfig } from "./src/config/Config";
import {
  MariaDbDatabase,
  MongoDbDatabase,
  MySqlDatabase,
} from "./src/orm/connection/TypeOrmConnectionFactory";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

MySqlDatabase.initialize()
  .then(() => {
    console.log("MySql database has been initialized!");
  })
  .catch((err) => {
    console.error("Error during MySql database initialization", err);
  });

MongoDbDatabase.initialize()
  .then(async () => {
    console.log("MongoDB has been initialized!");
  })
  .catch((err) => {
    console.error("Error during MongoDB initialization", err);
  });

MariaDbDatabase.initialize()
  .then(async () => {
    console.log("MariaDB has been initialized!");
  })
  .catch((err) => {
    console.error("Error during MariaDB initialization", err);
  });

app.use("/api", router);

app.use("/health-check", async (req, res) => {
  return res.status(200).json({ status: "it works!" });
});

app.listen(appConfig.port, () =>
  console.log(`server started on port: ${appConfig.port}`)
);

export default app;
