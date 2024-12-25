import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Включает строгий режим React
  env: {
    GMAIL_USER: process.env.GMAIL_USER,
    GMAIL_PASSWORD: process.env.GMAIL_PASSWORD,
  },
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
