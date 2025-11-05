import { cacheLife, cacheTag } from 'next/cache';
import { cache } from 'react';

import { TProduct } from '../types';

export type TProductResponse = TProduct;

export const getProduct = cache(
  async (id: string | number): Promise<TProductResponse> => {
    'use cache';
    cacheLife({ revalidate: 300 });
    cacheTag('product', `product-${id}`);

    const response = await fetch(`${process.env.API_URL}/products/${id}`);
    const result = await response.json();

    return result;
  },
);
