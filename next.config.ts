import "~/shared/environment/client";
import "~/shared/environment/server";

import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  typedRoutes: true,

  /**
   * Build performance optimizations.
   * Type checking and linting are handled in CI/CD pipelines.
   */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
