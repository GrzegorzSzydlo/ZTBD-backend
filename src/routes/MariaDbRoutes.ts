import express from "express";
import * as MariaDbController from "../controllers/MariaDbController";
const router = express.Router();

router.get("/first-query", MariaDbController.getFirstQuery);
router.get("/second-query", MariaDbController.getSecondQuery);
router.get("/third-query", MariaDbController.getThirdQuery);
router.get("/fourth-query", MariaDbController.getFourthQuery);

export default router;
