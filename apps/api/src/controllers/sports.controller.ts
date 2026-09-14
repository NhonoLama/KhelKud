import type { Request, Response } from "express";
import { getSports } from "../services/sports.service.js";

export async function getSportsController(
  _req: Request,
  res: Response
) {
  try {
    const result = await getSports();

    res.json({
      data: result,
    });
  } catch (error) {
    console.error("Failed to fetch sports:", error);

    res.status(500).json({
      message: "Failed to fetch sports",
    });
  }
}