import { Roboto } from 'next/font/google';

export const FontPrimary = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-primary',
  display: 'swap',
});
