import type { Request, Response } from "express";

import {
  getSports,
  getSportBySlug,
} from "../services/sports.service.js";

import {
  sendSuccess,
  sendError,
} from "../utils/response.js";

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