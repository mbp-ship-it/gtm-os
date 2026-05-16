/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Enable when wiring real Anthropic API calls via server actions
    // serverActions: { allowedOrigins: ['localhost:3000'] },
  },
  images: {
    domains: [],
  },
  // Allow long-running AI streamed responses
  serverRuntimeConfig: {
    maxDuration: 60,
  },
};

module.exports = nextConfig;
