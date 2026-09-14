import { config } from "dotenv";
import { createDatabase } from "./client.js";
import { sports } from "./schema/index.js";

config({
  path: "../../apps/api/.env",
});

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

const { db, pool } = createDatabase(process.env.DATABASE_URL);

async function seed() {
  console.log("Seeding database...");

  await db
    .insert(sports)
    .values([
      {
        name: "Football",
        slug: "football",
      },
      {
        name: "Cricket",
        slug: "cricket",
      },
    ])
    .onConflictDoNothing();

  console.log("Database seeded successfully.");
}

try {
  await seed();
} catch (error) {
  console.error("Database seed failed:", error);
  process.exitCode = 1;
} finally {
  await pool.end();
}