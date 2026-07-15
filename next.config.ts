import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpress-1580849-6168519.cloudwaysapps.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'adgritcore.com',
          },
        ],
        destination: 'https://www.adgritcore.com/:path*',
        permanent: true,
      },
      {
        source: "/posts/:id",
        destination: "/blog",
        permanent: true,
      },
      ...[
        "/service/marketing",
        "/service/google",
        "/service/sns",
        "/service/performance",
        "/service/content",
        "/service/integrated",
        "/business/automation",
        "/business/consulting",
        "/business/development",
      ].map((source) => ({
        source,
        destination: "/",
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
