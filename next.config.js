/** @type {import('next').NextConfig} */
const nextConfig = {
  ignoreBuildErrors: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
