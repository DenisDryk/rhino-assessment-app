import { Metadata } from 'next';

import { getProducts } from '@api/products/get';
import MarketProductsPage from '@components/features/market/MarketProductsPage';

export const metadata: Metadata = {
  title: 'Products',
};

const ProductsPage = async ({}: PageProps<'/[market]/products'>) => {
  const data = await getProducts();

  return <MarketProductsPage products={data.products} />;
};

export default ProductsPage;
