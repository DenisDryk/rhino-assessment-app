interface IProductCardProps {
  children?: React.ReactNode;
  dataTestId?: string;
}

const ProductCard = ({
  children,
  dataTestId = 'product-card',
}: IProductCardProps) => {
  return <div data-testid={dataTestId}>{children}</div>;
};

export default ProductCard;
