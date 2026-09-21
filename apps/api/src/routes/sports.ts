import { Router } from "express";

import {
  getSportsController,
  getSportBySlugController,
} from "../controllers/sports.controller.js";

import { validateParams } from "../middleware/validate.middleware.js";

import { sportSlugParamsSchema } from "../validation/sports.validation.js";

const router = Router();

// Get all sports
router.get("/", getSportsController);

// Get a single sport by slug
router.get(
  "/:slug",
  validateParams(sportSlugParamsSchema),
  getSportBySlugController
);

export default router;