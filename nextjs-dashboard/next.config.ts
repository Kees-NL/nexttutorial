import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: ['*.app.github.dev/', 'localhost:3000']
    }
  }
};

export default nextConfig;
