import { Skeleton, Typography } from '@packages/shared-ui/components';
import Link from 'next/link';
import { Suspense } from 'react';

import { ROUTES } from '@constants/routes';

import AuthLogin from './components/AuthLogin';

interface IHeaderProps {
  title: React.ReactNode;
}

const Header = ({ title }: IHeaderProps) => {
  return (
    <header className='bg-card border-border flex items-center justify-between border-b px-8 py-4'>
      <Link href={ROUTES.INDEX}>
        <Typography as='h1' variant='h2'>
          {title}
        </Typography>
      </Link>
      <Suspense fallback={<Skeleton className='h-9 w-24' />}>
        <AuthLogin />
      </Suspense>
    </header>
  );
};

export default Header;
