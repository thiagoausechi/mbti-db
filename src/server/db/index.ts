import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { env, isProdEnv } from "~/environment";
import * as schema from "./schema";

/**
 * Cache the database connection in development.
 * This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

const conn = globalForDb.conn ?? postgres(env.DATABASE_URL);
if (!isProdEnv()) globalForDb.conn = conn;

export const db = drizzle(conn, { schema });
