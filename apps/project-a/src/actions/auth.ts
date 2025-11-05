'use server';

import { redirect } from 'next/navigation';

import { createSessionAction, deleteSessionAction } from '@actions/session';
import Credentials from '@constants/credentials.json';
import { ROUTES } from '@constants/routes';
import {
  TZSigninFormSchema,
  ZSigninFormSchema,
} from '@constants/schemas/signin';

export const signinAction = async (values: TZSigninFormSchema) => {
  const validatedFields = ZSigninFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { username, password } = validatedFields.data;

  const user = Credentials.users.find(
    (user) => user.username === username && user.password === password,
  );

  if (!user) {
    return {
      message: 'Invalid username or password',
      success: false,
    };
  }

  await createSessionAction({ userId: user.id, username: user.username });

  redirect(ROUTES.INDEX);
};

export const logoutAction = async () => {
  await deleteSessionAction();
};
