import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Export mode requires static image handling instead of the default optimizer
    unoptimized: true,
  },
};

export default nextConfig;
