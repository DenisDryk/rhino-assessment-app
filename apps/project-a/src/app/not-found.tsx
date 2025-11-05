import { Typography } from '@packages/shared-ui/components';
import Link from 'next/link';

import { ROUTES } from '@constants/routes';

const NotFound = () => {
  return (
    <section className='m-auto flex h-full flex-col items-center justify-center gap-4'>
      <Typography as='h1' variant='h1'>
        404 - Page not found
      </Typography>
      <Typography>
        The page you are looking for does not exist. Please go back to the
        homepage.
      </Typography>
      <Link className='text-blue-500 hover:underline' href={ROUTES.INDEX}>
        <Typography as='span'>Go back to homepage</Typography>
      </Link>
    </section>
  );
};

export default NotFound;
