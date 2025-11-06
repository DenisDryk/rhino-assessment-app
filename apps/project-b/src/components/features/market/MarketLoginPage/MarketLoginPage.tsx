import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@packages/shared-ui/components';

import LoginForm from './components/LoginForm';

const MarketLoginPage = () => {
  return (
    <>
      <section>
        <Card className='w-full max-w-sm'>
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your username and password below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default MarketLoginPage;
