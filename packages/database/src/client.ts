import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

export function createDatabase(connectionString: string) {
  const pool = new Pool({
    connectionString,
  });

  const db = drizzle({
    client: pool,
  });

  const checkConnection = async () => {
    await db.execute(sql`SELECT 1`);
  };

  return {
    db,
    pool,
    checkConnection,
  };
}