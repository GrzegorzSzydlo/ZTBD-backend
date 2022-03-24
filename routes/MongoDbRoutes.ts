import express from "express";
import * as MongoDbController from "../controllers/MongoDbController";
const router = express.Router();

router.get("/first-query", MongoDbController.getFirstQuery);
router.get("/second-query", MongoDbController.getSecondQuery);
router.get("/third-query", MongoDbController.getThirdQuery);
router.get("/fourth-query", MongoDbController.getFourthQuery);
router.get("/fifth-query", MongoDbController.getFifthQuery);
router.get("/create", MongoDbController.createTerms);

export default router;
