import type { Metadata } from 'next';

import { getProduct } from '@api/products/[slug]/get';
import MarketProductPage from '@components/features/market/MarketProductPage';

export async function generateMetadata({
  params,
}: PageProps<'/[market]/products/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const data = await getProduct(slug);

  return {
    title: data.title,
    description: data.description,
  };
}

const ProductPage = async ({
  params,
}: PageProps<'/[market]/products/[slug]'>) => {
  const { slug } = await params;

  const data = await getProduct(slug);

  return <MarketProductPage data={data} />;
};

export default ProductPage;
