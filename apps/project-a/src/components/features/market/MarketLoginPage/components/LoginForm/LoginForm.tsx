'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';

import { signinAction } from '@actions/auth';
import { Button } from '@components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/ui/form';
import { Input } from '@components/ui/input';
import {
  TZSigninFormSchema,
  ZSigninFormSchema,
} from '@constants/schemas/signin';

const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<string>();

  const form = useForm<TZSigninFormSchema>({
    resolver: zodResolver(ZSigninFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const handleSubmit = async (values: TZSigninFormSchema) => {
    setFormError('');
    startTransition(async () => {
      const { success, message } = await signinAction(values);
      if (success) form.reset();
      if (!success) setFormError(message);
    });
  };

  return (
    <Form {...form}>
      <form className='space-y-4' onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} placeholder='user' autoComplete='username' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='password'
                  placeholder='********'
                  autoComplete='current-password'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {formError && <FormMessage>{formError}</FormMessage>}
        <Button type='submit' disabled={isPending}>
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
