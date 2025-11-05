import ProductCard from './ProductCard';
import { describe, it, expect, render, screen } from '../../utils/testing';

const componentProps: React.ComponentProps<typeof ProductCard> = {
  category: 'Category',
  title: 'Title',
  media: { src: 'https://via.placeholder.com/150x150' },
  tags: ['Tag 1', 'Tag 2'],
  dataTestId: 'product-card-test-id',
};

describe('ProductCard component', () => {
  it('should render', () => {
    render(<ProductCard />);

    expect(screen.getByTestId('product-card')).toBeInTheDocument();
  });

  it('should render with different props', () => {
    render(<ProductCard {...componentProps} />);

    expect(screen.getByTestId('product-card-test-id')).toBeInTheDocument();
    expect(
      screen.getByTestId('product-card-test-id-title'),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId('product-card-test-id-category'),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId('product-card-test-id-media'),
    ).toBeInTheDocument();
    expect(screen.getByTestId('product-card-test-id-tags')).toBeInTheDocument();
    expect(
      screen.getByTestId('product-card-test-id-tags-tag-0'),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId('product-card-test-id-tags-tag-1'),
    ).toBeInTheDocument();
  });
});
