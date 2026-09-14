import type { ErrorRequestHandler } from "express";
import { sendError } from "../utils/response.js";

export const errorHandler: ErrorRequestHandler = (
  error,
  _req,
  res,
  _next
) => {
  console.error(error);

  sendError(
    res,
    "Internal server error",
    500
  );
};