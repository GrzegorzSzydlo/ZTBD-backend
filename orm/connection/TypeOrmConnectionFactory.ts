import { DataSource } from "typeorm";
import * as path from "path";

export const MySqlDatabase = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "ztbd-mysql",
  entities: [path.join(__dirname, "../entities/mysql/*.{js,ts}")],
  synchronize: true,
});
