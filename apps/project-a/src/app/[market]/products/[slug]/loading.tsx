import { Skeleton } from '@packages/shared-ui/components';

const ProductLoading = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <Skeleton className='h-9 w-64' />
        <Skeleton className='h-24 w-full' />
        <Skeleton className='h-9 w-48' />
        <Skeleton className='h-9 w-52' />
      </div>
      <div className='grid grid-cols-3 gap-4'>
        {Array.from({ length: 3 }).map((_, rowIndex) => (
          <div className='' key={rowIndex}>
            <Skeleton className='h-80 w-full' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductLoading;
