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
  synchronize: false,
});

export const MongoDbDatabase = new DataSource({
  type: "mongodb",
  host: "localhost",
  port: 27017,
  database: "ztbd-mongo",
  entities: [path.join(__dirname, "../entities/mongodb/*.{js,ts}")],
  migrations: [path.join(__dirname, "../migrations/*.{js,ts}")],
  synchronize: true,
  logging: false,
});
