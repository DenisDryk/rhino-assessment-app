import { Suspense } from 'react';

import { TProductResponse } from '@api/products/[slug]/get';

import Media from './components/Media';
import Reviews from './components/Reviews';
import TopMeta from './components/TopMeta';

interface IMarketProductPageProps {
  data: TProductResponse;
}

const MarketProductPage = ({ data }: IMarketProductPageProps) => {
  return (
    <>
      <TopMeta {...data} />
      <Media images={data.images} title={data.title} />
      <Suspense>
        <Reviews rating={data.rating} reviews={data.reviews} />
      </Suspense>
    </>
  );
};

export default MarketProductPage;
