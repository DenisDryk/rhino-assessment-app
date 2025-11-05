import { Typography } from '@packages/shared-ui/components';

import { TProduct } from '@api/products/types';

interface ITopMetaProps {
  title: TProduct['title'];
  category: TProduct['category'];
  description: TProduct['description'];
  tags: TProduct['tags'];
  price: TProduct['price'];
  discountPercentage: TProduct['discountPercentage'];
}

const TopMeta = ({
  title,
  category,
  description,
  tags,
  price,
  discountPercentage,
}: ITopMetaProps) => {
  return (
    <section className='flex flex-col gap-2'>
      <div className='flex items-end gap-2'>
        <Typography as='h1' variant='h1'>
          {title}
        </Typography>
        <Typography className='text-muted-foreground' variant='h4'>
          {category}
        </Typography>
      </div>
      <Typography as='h2' variant='h4'>
        {description}
      </Typography>
      <div className='flex gap-1'>
        {tags.map((tag, index) => (
          <Typography
            className='text-foreground rounded border p-0.5'
            as='span'
            key={index}
          >
            {tag}
          </Typography>
        ))}
      </div>
      <Typography className='text-chart-1' variant='h1'>
        ${price}
      </Typography>
      <Typography className='text-destructive' variant='h1'>
        Discount {discountPercentage}%
      </Typography>
    </section>
  );
};

export default TopMeta;
