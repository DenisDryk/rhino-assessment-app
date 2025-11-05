import { cacheLife, cacheTag } from 'next/cache';
import { cache } from 'react';

import { TProduct } from './types';

export const PRODUCTS_LIMIT = 24;

export type TProductsResponse = {
  products: TProduct[];
  limit: number;
  skip: number;
  total: number;
};

export const getProducts = cache(async (): Promise<TProductsResponse> => {
  'use cache';
  cacheLife({ revalidate: 300 });
  cacheTag('products');

  const response = await fetch(
    `${process.env.API_URL}/products?limit=${PRODUCTS_LIMIT}&skip=${60}`,
  );
  const result = await response.json();

  return result;
});
