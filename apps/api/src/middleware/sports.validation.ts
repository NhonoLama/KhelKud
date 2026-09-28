import { z } from "zod";

export const sportSlugParamsSchema = z.object({
  slug: z
    .string()
    .trim()
    .min(1)
    .max(50)
    .regex(/^[a-z0-9-]+$/),
});

export const createSportBodySchema = z.object({
  name: z
    .string()
    .min(2)
    .max(100),

  slug: z
    .string()
    .min(1)
    .max(50)
    .regex(/^[a-z0-9-]+$/),
});