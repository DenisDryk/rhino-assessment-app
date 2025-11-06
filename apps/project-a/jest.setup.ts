import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

global.TextEncoder = jest.fn();
global.Request = jest.fn();
