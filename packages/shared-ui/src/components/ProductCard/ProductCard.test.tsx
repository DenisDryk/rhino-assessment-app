import ProductCard from './ProductCard';
import { describe, it, expect, render, screen } from '../../utils/testing';

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
