import { MARKET } from '@packages/types';

import MarketHomePage from '@components/features/market/MarketHomePage';

const MarketPage = async ({ params }: PageProps<'/[market]'>) => {
  const { market } = await params;

  return <MarketHomePage market={market as MARKET} />;
};

export default MarketPage;
