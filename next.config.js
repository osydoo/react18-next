/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  concurrentFeatures: true,
  experimental: {
    runtime: 'nodejs',
    serverComponents: true,
  },
};

module.exports = nextConfig;
