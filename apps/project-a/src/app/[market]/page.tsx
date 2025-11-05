import { MARKET } from '@packages/types';
import { notFound } from 'next/navigation';

import MarketHomePage from '@components/features/market/MarketHomePage';
import { BRAND_MARKETS } from '@constants/brand';

const MarketPage = async ({ params }: PageProps<'/[market]'>) => {
  const { market } = await params;

  if (!Object.values(BRAND_MARKETS).includes(market as MARKET)) {
    return notFound();
  }

  return <MarketHomePage market={market as MARKET} />;
};

export default MarketPage;
