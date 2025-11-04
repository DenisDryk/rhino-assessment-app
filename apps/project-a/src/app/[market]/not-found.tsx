import { Typography } from '@packages/shared-ui/components';
import Link from 'next/link';

import { ROUTES } from '@constants/routes';

const SingleMarketNotFound = () => {
  return (
    <section className='flex min-h-screen flex-col items-center justify-center gap-4'>
      <Typography as='h1' variant='h1'>
        404 - Market not found
      </Typography>
      <Typography>
        The market you are looking for does not exist. Please go back to the
        homepage.
      </Typography>
      <Link className='text-blue-500 hover:underline' href={ROUTES.INDEX}>
        <Typography as='span'>Go back to homepage</Typography>
      </Link>
    </section>
  );
};

export default SingleMarketNotFound;
