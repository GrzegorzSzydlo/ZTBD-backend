import express from "express";
import * as MySqlController from "../controllers/MySqlController";
const router = express.Router();

router.get("/first-query", MySqlController.getFirstQuery);
router.get("/second-query", MySqlController.getSecondQuery);
router.get("/third-query", MySqlController.getThirdQuery);
router.get("/fourth-query", MySqlController.getFourthQuery);
router.get("/fifth-query", MySqlController.getFifthQuery);

export default router;
