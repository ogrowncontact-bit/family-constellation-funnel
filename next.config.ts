import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Works around a Next.js 16 bug where static prerendering of internal
    // routes (/_not-found, /_global-error) intermittently fails with
    // "InvariantError: Expected workUnitAsyncStorage to have a store" under
    // CPU load. See https://github.com/vercel/next.js/discussions/86978
    staticGenerationRetryCount: 3,
    cpus: 1,
  },
};

export default nextConfig;
