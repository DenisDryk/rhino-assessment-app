export const ROUTES = {
  INDEX: '/',
  MARKET: {
    INDEX: '/',
    LOGIN: '/login',
    PRODUCTS: {
      INDEX: '/products',
      SINGLE: {
        INDEX: (slug: string) => `/products/${slug}`,
      },
    },
  },
};
