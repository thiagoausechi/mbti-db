import { z } from "zod";

export const server = {
  DATABASE_URL: z.string().url(),
  CLERK_SECRET_KEY: z.string(),
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
};
