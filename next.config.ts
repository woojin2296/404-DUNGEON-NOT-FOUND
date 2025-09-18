import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Serve static assets relative to index.html so the build works on hosts like itch.io
  assetPrefix: "./",
  images: {
    // Export mode requires static image handling instead of the default optimizer
    unoptimized: true,
  },
};

export default nextConfig;
