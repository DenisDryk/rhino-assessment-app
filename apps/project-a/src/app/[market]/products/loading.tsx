import { PRODUCTS_LIMIT } from '@api/products/get';
import { Skeleton } from '@components/ui/skeleton';

const ProductsLoaing = () => {
  return (
    <div className='grid grid-cols-2 gap-6 md:grid-cols-4 xl:grid-cols-6'>
      {Array.from({ length: PRODUCTS_LIMIT }).map((_, index) => (
        <Skeleton className='h-64 w-full' key={index} />
      ))}
    </div>
  );
};

export default ProductsLoaing;
