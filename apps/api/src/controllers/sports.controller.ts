import type { Request, Response } from "express";
import { getSports } from "../services/sports.service.js";
import { sendSuccess } from "../utils/response.js";

export async function getSportsController(
  _req: Request,
  res: Response
) {
  const result = await getSports();

  return sendSuccess(res, result);
}