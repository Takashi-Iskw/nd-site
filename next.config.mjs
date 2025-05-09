// next.config.js (ESM)
import path from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // "@/..." → "src/..." のエイリアス
    config.resolve.alias['@'] = path.resolve(process.cwd(), 'src');
    return config;
  },
}

export default nextConfig;
