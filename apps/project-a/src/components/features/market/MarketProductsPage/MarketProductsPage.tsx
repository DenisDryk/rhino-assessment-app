import { ProductCard } from '@packages/shared-ui/components';
import Image from 'next/image';
import Link from 'next/link';

import { TProductsResponse } from '@api/products/get';
import { ROUTES } from '@constants/routes';

interface IMarketProductsPageProps {
  products: TProductsResponse['products'];
}

const MarketProductsPage = ({ products }: IMarketProductsPageProps) => {
  return (
    <section>
      <div className='grid grid-cols-2 gap-6 md:grid-cols-4 xl:grid-cols-6'>
        {products.map((product) => (
          <Link
            className='flex'
            href={ROUTES.MARKET.PRODUCTS.SINGLE.INDEX(`${product.id}`)}
            key={product.id}
          >
            <ProductCard
              title={product.title}
              category={product.category}
              tags={product.tags}
              media={{
                src: product.images[0],
                as: Image,
              }}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MarketProductsPage;
