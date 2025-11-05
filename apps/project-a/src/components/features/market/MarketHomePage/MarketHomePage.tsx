import { MARKET_NAMES } from '@packages/constants';
import { Typography } from '@packages/shared-ui/components';
import { MARKET } from '@packages/types';
import Link from 'next/link';

import { Button } from '@components/ui/button';
import { BRAND_MARKETS, BRAND_TITLE } from '@constants/brand';
import { withFeatureFlag } from '@constants/featureFlags';

import AlertButton from './components/AlertButton';
import BrandConfig from '../../../../brand-config.json';

interface IMarketHomePageProps {
  market: MARKET;
}

const MarketHomePage = ({ market }: IMarketHomePageProps) => {
  const marketName = MARKET_NAMES[market];

  return (
    <>
      <section className='flex flex-col'>
        <Typography className='mb-4' variant='h1' as='h1'>
          Welcome to the {marketName} Market of {BRAND_TITLE}
        </Typography>
        <Typography className='text-muted-foreground mb-8'>
          Custom content for {marketName} market here.
        </Typography>
        {withFeatureFlag('SHOW_BUTTON_ALERT') && (
          <div className='mb-4'>
            <AlertButton
              alertText={BrandConfig.CONFIGURATIONS.ALERT_BUTTON_TEXT}
            >
              Alert Button
            </AlertButton>
          </div>
        )}
        {withFeatureFlag('HIDE_MARKET_BUTTON') && (
          <div className='flex gap-2'>
            {BRAND_MARKETS.map((btnMarket) => {
              if (btnMarket === market) return;
              const marketName = MARKET_NAMES[btnMarket as MARKET];

              return (
                <Link href={`/${btnMarket}`} key={btnMarket}>
                  <Button>Switch to {marketName} market</Button>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
};

export default MarketHomePage;
