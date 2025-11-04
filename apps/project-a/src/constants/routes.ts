import { MARKET } from '@packages/types';

export const ROUTES = {
  INDEX: '/',
  MARKET: {
    INDEX: (id: MARKET) => `/${id}`,
    LOGIN: (id: MARKET) => `/${id}/login`,
    PRODUCTS: {
      INDEX: (id: MARKET) => `/${id}/products`,
      SINGLE: {
        INDEX: (id: MARKET, slug: string) => `/${id}/products/${slug}`,
      },
    },
  },
};
