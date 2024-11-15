import { createEnv } from "@t3-oss/env-nextjs";
import { client } from "./client.schema.js";
import { server } from "./server.schema.js";

export const env = createEnv({
  server,
  client,

  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
  },

  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  emptyStringAsUndefined: true,
});

export const isDevEnv = () => env.NODE_ENV === "development";
export const isTestEnv = () => env.NODE_ENV === "test";
export const isProdEnv = () => env.NODE_ENV === "production";
