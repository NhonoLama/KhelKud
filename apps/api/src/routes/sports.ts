import { Router } from "express";
import { getSportsController } from "../controllers/sports.controller.js";

const router = Router();

router.get("/", getSportsController);

export default router;