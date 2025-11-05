import Link from 'next/link';

import { logoutAction } from '@actions/auth';
import { verifySession } from '@actions/session';
import { Button } from '@components/ui/button';
import { ROUTES } from '@constants/routes';

const AuthLogin = async () => {
  const session = await verifySession();

  if (session.isAuth) {
    return (
      <form action={logoutAction}>
        <Button variant='outline'>Log Out</Button>
      </form>
    );
  }

  return (
    <Link href={ROUTES.MARKET.LOGIN}>
      <Button variant='default'>Log In</Button>
    </Link>
  );
};

export default AuthLogin;
