import type { NextConfig } from 'next';

import BrandConfig from './src/brand-config.json';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: `/${BrandConfig.BRAND.LOCALES.DEFAULT}`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
