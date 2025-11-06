import { Skeleton } from '@packages/shared-ui/components';

import { PRODUCTS_LIMIT } from '@api/products/get';

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
