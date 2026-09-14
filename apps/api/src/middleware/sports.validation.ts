import { z } from "zod";

export const sportSlugParamsSchema = z.object({
  slug: z
    .string()
    .trim()
    .min(1)
    .max(50)
    .regex(/^[a-z0-9-]+$/),
});