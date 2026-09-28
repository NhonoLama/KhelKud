import type { Request, Response } from "express";

import {
  getSports,
  getSportBySlug,
  createSport,
} from "../services/sports.service.js";

import {
  sendSuccess,
  sendError,
} from "../utils/response.js";

type CreateSportBody = {
  name: string;
  slug: string;
};


export async function getSportsController(
  _req: Request,
  res: Response
) {
  const result = await getSports();

  return sendSuccess(res, result);
}

export async function getSportBySlugController(
  req: Request<{ slug: string }>,
  res: Response
) {
  const { slug } = req.params;

  const sport = await getSportBySlug(slug);

  if (!sport) {
    sendError(res, "Sport not found", 404);
    return;
  }

  sendSuccess(res, sport);
}

export async function createSportController(
  req: Request<{}, {}, CreateSportBody>,
  res: Response
) {
  const sport = await createSport(req.body);

  if (!sport) {
    sendError(
      res,
      "Sport already exists",
      409
    );

    return;
  }

  return sendSuccess(
    res,
    sport,
    201
  );
}