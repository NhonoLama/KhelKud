import { eq, sports } from "@khelkud/database";
import { db } from "../config/database.js";

type CreateSportInput = {
  name: string;
  slug: string;
};


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

export async function createSport(
  input: CreateSportInput
) {
  const [sport] = await db
    .insert(sports)
    .values(input)
    .onConflictDoNothing()
    .returning();

  return sport ?? null;
}

export async function deleteSportBySlug(slug: string) {
  const [sport] = await db
    .delete(sports)
    .where(eq(sports.slug, slug))
    .returning();

  return sport ?? null;
}

