import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import BrandConfig from './brand-config.json';

const MARKET_COOKIE_NAME = 'x-market';

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const { value: cookieValue } = request.cookies.get(MARKET_COOKIE_NAME) || {};
  const firstPathnameGroup = request.nextUrl.pathname.split('/')[1];

  // If the 'x-market' cookie is not set, set it to the default market
  if (!cookieValue) {
    response.cookies.set(
      MARKET_COOKIE_NAME,
      BrandConfig.BRAND.MARKETS.DEFAULT,
      {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
      },
    );
  }

  // If the first pathname group matches one of the available markets, set the 'x-market' cookie to that market
  if (
    BrandConfig.BRAND.MARKETS.AVAILABLE_MARKETS.includes(firstPathnameGroup)
  ) {
    if (cookieValue !== firstPathnameGroup) {
      response.cookies.set(MARKET_COOKIE_NAME, firstPathnameGroup, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
      });
    }

    return response;
  }

  // If the 'x-market' cookie is set, but the first pathname group does not match the available markets, redirect the request to the same URL but with the market prefix
  if (firstPathnameGroup !== cookieValue) {
    return NextResponse.redirect(
      new URL(`/${cookieValue}${request.nextUrl.pathname}`, request.url),
    );
  }

  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
