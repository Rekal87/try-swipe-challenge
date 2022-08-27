/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['buzzly.info'],
  },
};

module.exports = nextConfig;
