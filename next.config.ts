import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Uncomment the following lines for static export (shared hosting)
  // output: 'export',
  // trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        port: "",
        pathname: "/**",
      },
    ],
    // Uncomment for static export
    // unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
