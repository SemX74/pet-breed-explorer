import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "cdn2.thecatapi.com",
      },
      {
        hostname: "cdn2.thedogapi.com",
      },
    ],
  },
};

export default nextConfig;
