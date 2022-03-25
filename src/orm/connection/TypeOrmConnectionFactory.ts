import { DataSource } from "typeorm";
import * as path from "path";

export const MySqlDatabase = new DataSource({
  type: "mysql",
  host: "remotemysql.com",
  port: 3306,
  username: "VyfbijsxI3",
  password: "CfSsE1UEWu",
  database: "VyfbijsxI3",
  entities: [path.join(__dirname, "../entities/mysql/*.{js,ts}")],
  synchronize: false,
});

export const MongoDbDatabase = new DataSource({
  type: "mongodb",
  useNewUrlParser: true,
  url: "mongodb+srv://ztdb-mongodb-grzegorz:grzegorz@ztbd-mongo.edw16.mongodb.net/ztbd-mongo?retryWrites=true&w=majority",
  entities: [path.join(__dirname, "../entities/mongodb/*.{js,ts}")],
  synchronize: false,
});

export const MariaDbDatabase = new DataSource({
  type: "mariadb",
  host: "remotemysql.com",
  port: 3306,
  username: "tYnlNplnIj",
  password: "gfWAyq4Jrv",
  database: "tYnlNplnIj",
  entities: [path.join(__dirname, "../entities/mariadb/*.{js,ts}")],
  synchronize: false,
});
