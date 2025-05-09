// next.config.js (ESM)
import path from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // "@/..." → "src/..." のエイリアス
    config.resolve.alias['@'] = path.resolve(process.cwd(), 'src');
    return config;
  },
};

module.exports = {
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    REGION: process.env.REGION
  },
};

export default nextConfig;
