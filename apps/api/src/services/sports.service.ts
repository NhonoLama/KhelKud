import { sports } from "@khelkud/database";
import { db } from "../config/database.js";

export async function getSports() {
  return db.select().from(sports);
}