import { cache } from 'react';

import { TProduct } from '../types';

export type TProductResponse = TProduct;

export const getProduct = cache(
  async (id: string | number): Promise<TProductResponse> => {
    const response = await fetch(`${process.env.API_URL}/products/${id}`);
    const result = await response.json();

    return result;
  },
);
