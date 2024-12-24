import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true, // Включает строгий режим React
    async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
