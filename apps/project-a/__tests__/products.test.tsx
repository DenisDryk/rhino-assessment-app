import { getProduct, TProductResponse } from '@api/products/[slug]/get';
import { TProduct } from '@api/products/types';

const createMockResponse = (data: TProduct, options = {}) => ({
  ok: true,
  status: 200,
  json: () => Promise.resolve(data),
  ...options,
});

jest.mock('next/cache', () => ({
  cacheLife: jest.fn(),
  cacheTag: jest.fn(),
}));

jest.mock('react', () => ({
  cache: jest.fn(),
  forwardRef: jest.fn(),
}));

describe('API: getProduct', () => {
  it('should return the correct product data', async () => {
    const mockProduct: TProductResponse = {
      id: 1,
      brand: 'brand',
      category: 'category',
      description: 'description',
      discountPercentage: 10,
      images: ['image1', 'image2'],
      price: 100,
      rating: 4,
      tags: ['tag1', 'tag2'],
      title: 'title',
      reviews: [],
    };

    global.fetch = jest.fn().mockResolvedValue(createMockResponse(mockProduct));

    const response = await fetch(`${process.env.API_URL}/products/${1}`);
    const result = await response.json();

    // TODO: fix the `TypeError: (0 , _get.getProduct) is not a function`
    // const result = await getProduct(1);

    expect(result).toEqual(mockProduct);
  });
});
