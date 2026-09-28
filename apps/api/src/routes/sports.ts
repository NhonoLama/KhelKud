import { Router } from "express";

import {
  getSportsController,
  getSportBySlugController,
  createSportController,
  deleteSportBySlugController,
} from "../controllers/sports.controller.js";

import { validateBody,validateParams } from "../middleware/validate.middleware.js";

import { createSportBodySchema, sportSlugParamsSchema } from "../validation/sports.validation.js";

const router = Router();

// Get all sports
router.get("/", getSportsController);

// Get a single sport by slug
router.get(
  "/:slug",
  validateParams(sportSlugParamsSchema),
  getSportBySlugController
);

router.post(
  "/",
  validateBody(createSportBodySchema),
  createSportController
);

router.delete(
  "/:slug",
  validateParams(sportSlugParamsSchema),
  deleteSportBySlugController
);

export default router;