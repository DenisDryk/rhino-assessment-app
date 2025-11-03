/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, type RenderOptions } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render, screen, describe, it, expect };
