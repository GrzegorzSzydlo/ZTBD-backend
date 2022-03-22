import "reflect-metadata";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { router } from "./routes";
import { appConfig } from "./config/Config";
import { MySqlDatabase } from "./orm/connection/TypeOrmConnectionFactory";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

MySqlDatabase.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

app.use("/api", router);

app.use("/health-check", async (req, res) => {
  return res.status(200).json({ status: "it works!" });
});

app.listen(appConfig.port, () =>
  console.log(`server started on port: ${appConfig.port}`)
);

export default app;
