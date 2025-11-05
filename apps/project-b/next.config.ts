import type { NextConfig } from 'next';

import BrandConfig from './src/brand-config.json';

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [new URL('https://cdn.dummyjson.com/**')],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: `/${BrandConfig.BRAND.MARKETS.DEFAULT}`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
