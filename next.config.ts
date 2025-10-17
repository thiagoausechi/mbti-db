import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,

  /**
   * Build performance optimizations.
   * Type checking and linting are handled in CI/CD pipelines.
   */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
