/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/environment/index.js";

/** @type {import("next").NextConfig} */
const config = {
  typescript: {
    // We can run separate type-checking in CI
    ignoreBuildErrors: true,
  },
  eslint: {
    // We can run separate linting in CI
    ignoreDuringBuilds: true,
  },
};

export default config;
