import { createDatabase } from "@khelkud/database";
import { env } from "./env.js";

export const { db, pool , checkConnection } = createDatabase(env.DATABASE_URL);