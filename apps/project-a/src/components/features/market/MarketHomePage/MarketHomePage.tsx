import { MARKET_NAMES } from '@packages/constants';
import { Typography } from '@packages/shared-ui/components';
import { MARKET } from '@packages/types';

import { BRAND_TITLE } from '@constants/brand';

interface IMarketHomePageProps {
  market: MARKET;
}

const MarketHomePage = ({ market }: IMarketHomePageProps) => {
  const marketName = MARKET_NAMES[market];

  return (
    <>
      <Typography variant='h1' as='h1'>
        Welcome to the {marketName} Market of {BRAND_TITLE}
      </Typography>
      <Typography>Custom content for {marketName} market here.</Typography>
    </>
  );
};

export default MarketHomePage;
