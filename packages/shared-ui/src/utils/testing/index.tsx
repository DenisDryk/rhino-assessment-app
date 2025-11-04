import '@testing-library/jest-dom/vitest';
import {
  render,
  screen,
  RenderResult,
  type RenderOptions,
} from '@testing-library/react';
import { describe, it, expect } from 'vitest';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render, screen, describe, it, expect };
