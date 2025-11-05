'use server';

import { JWTPayload, SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { cache } from 'react';

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: JWTPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch {
    console.log('Failed to verify session');
  }
}

export const createSessionAction = async (user: {
  userId: string;
  username: string;
}) => {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ ...user, expiresAt });
  const cookieStore = await cookies();

  cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });
};

export const deleteSessionAction = async () => {
  const cookieStore = await cookies();
  cookieStore.delete('session');
};

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get('session')?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) return { isAuth: false };

  return {
    isAuth: true,
    user: { id: session.userId, name: session.username },
  };
});
