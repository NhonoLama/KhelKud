import type { RequestHandler } from "express";
import type { ZodType } from "zod";
import { sendError } from "../utils/response.js";

export function validateParams(
  schema: ZodType
): RequestHandler {
  return (req, res, next) => {
    const result = schema.safeParse(req.params);

    if (!result.success) {
      sendError(
        res,
        "Invalid route parameters",
        400
      );

      return;
    }

    next();
  };
}