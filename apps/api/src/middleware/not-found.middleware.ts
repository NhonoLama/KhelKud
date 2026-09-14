import type { RequestHandler } from "express";
import { sendError } from "../utils/response.js";

export const notFoundHandler: RequestHandler = (
  _req,
  res
) => {
  return sendError(
    res,
    "Route not found",
    404
  );
};