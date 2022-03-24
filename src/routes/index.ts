import express from "express";
import MySqlRoutes from "./MySqlRoutes";
import MongoDbRoutes from "./MongoDbRoutes";
import MariaDbRoutes from "./MariaDbRoutes";

const router = express.Router();

router.use("/mysql", MySqlRoutes);
router.use("/mongodb", MongoDbRoutes);
router.use("/mariadb", MariaDbRoutes);

export { router };
