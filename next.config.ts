import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpress-1580849-6168519.cloudwaysapps.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/posts/:id",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
