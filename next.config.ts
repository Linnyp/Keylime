import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile in the user's home directory makes Next infer the wrong
  // workspace root, which breaks build-trace collection. Pin it to this app.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
