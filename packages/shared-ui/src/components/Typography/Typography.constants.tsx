import type { TVariant } from './Typography.types';

export const VARIANT_LIST = ['h1', 'h2', 'h3', 'h4', 'h5', 'p'] as const;

export const VARIANTS: Record<TVariant, string> = {
  h1: 'font-semibold text-[2rem] leading-[1.20]',
  h2: 'font-semibold text-[1.25rem] leading-[1.20]',
  h3: 'font-semibold text-[1rem] leading-[1.20]',
  h4: 'font-semibold text-[0.875rem] leading-[1.20]',
  p: 'font-normal text-[0.875rem] leading-[1.40]',
};
