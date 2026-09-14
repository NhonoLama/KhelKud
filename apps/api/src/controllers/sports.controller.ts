import type { Request, Response } from "express";
import { getSports } from "../services/sports.service.js";

export async function getSportsController(
  _req: Request,
  res: Response
) {
  const result = await getSports();

  res.json({
    data: result,
  });
}