import '@packages/shared-ui/styles.css';
import { cn } from '@packages/shared-ui/utils';
import type { Metadata } from 'next';

import { BRAND_TITLE } from '@constants/brand';
import { FontPrimary } from '@styles/fonts';
import '@styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: BRAND_TITLE,
    template: `%s | ${BRAND_TITLE}`,
  },
};

const RootLayout = async ({ children }: LayoutProps<'/'>) => {
  return (
    <html lang='en'>
      <body
        className={cn(
          'bg-background font-primary flex min-h-screen overflow-x-hidden antialiased',
          FontPrimary.variable,
        )}
      >
        <>{children}</>
      </body>
    </html>
  );
};

export default RootLayout;
