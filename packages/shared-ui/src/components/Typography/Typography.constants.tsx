import type { TVariant } from './Typography.types';

export const VARIANT_LIST = ['h1', 'h2', 'h3', 'h4', 'h5', 'p'] as const;

export const VARIANTS: Record<TVariant, string> = {
  h1: 'font-semibold text-[2rem] leading-[1.20] sm:text-[2.25rem] lg:text-[2.5rem]',
  h2: 'font-semibold text-[1.25rem] leading-[1.20] sm:text-[1.375rem] lg:text-[1.5rem]',
  h3: 'font-semibold text-[1rem] leading-[1.20] sm:text-[1.125rem] lg:text-[1.25rem]',
  h4: 'font-semibold text-[0.875rem] leading-[1.20] sm:text-[0.938rem] lg:text-[1rem]',
  p: 'font-normal text-[0.875rem] leading-[1.40] sm:text-[0.938rem] lg:text-[1rem]',
};
