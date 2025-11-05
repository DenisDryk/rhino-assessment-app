import { z } from 'zod';

export type TZSigninFormSchema = z.infer<typeof ZSigninFormSchema>;
export const ZSigninFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: 'Username must be at least 2 characters.' })
    .trim(),
  password: z.string().nonempty().trim(),
});
