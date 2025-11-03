import { describe, it, expect, render, screen } from '@utils/testing';

import ProductCard from './ProductCard';

describe('ProductCard component', () => {
  it('should render', () => {
    render(<ProductCard />);

    expect(screen.getByTestId('product-card')).toBeInTheDocument();
  });

  it('should render with children prop', () => {
    render(<ProductCard>Content</ProductCard>);

    expect(screen.getByTestId('product-card')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
