import { eq, sports } from "@khelkud/database";
import { db } from "../config/database.js";

export async function getSports() {
  return db.select().from(sports);
}

export async function getSportBySlug(slug: string) {
  const [sport] = await db
    .select()
    .from(sports)
    .where(eq(sports.slug, slug))
    .limit(1);

  return sport ?? null;
}