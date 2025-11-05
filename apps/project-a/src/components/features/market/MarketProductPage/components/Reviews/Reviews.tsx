import { ProductCard, Typography } from '@packages/shared-ui/components';

import { verifySession } from '@actions/session';
import { TProduct } from '@api/products/types';

interface IReviewsProps {
  rating: TProduct['rating'];
  reviews: TProduct['reviews'];
}

const Reviews = async ({ rating, reviews }: IReviewsProps) => {
  const session = await verifySession();

  if (!session.isAuth) return null;

  return (
    <section className='flex flex-col gap-6'>
      <div>
        <Typography variant='h2'>
          Rating:
          <Typography className='text-chart-1 ms-2' as='span' variant='h1'>
            {rating}
          </Typography>
        </Typography>
      </div>
      <div className='grid grid-cols-3 gap-2'>
        {reviews.map((review, index) => (
          <ProductCard
            title={
              <>
                <Typography variant='h3'>{review.reviewerName}</Typography>
                <Typography className='text-muted-foreground' variant='h4'>
                  {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }).format(new Date(review.date))}
                </Typography>
              </>
            }
            category={review.reviewerEmail}
            layout='horizontal'
            key={index}
          >
            <>
              <Typography>{review.comment}</Typography>
              <Typography className='text-yellow-700' as='span'>
                {review.rating}
              </Typography>
            </>
          </ProductCard>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
