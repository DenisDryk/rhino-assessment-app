import { cn } from '../../utils/lib/cn';
import Typography from '../Typography';

interface IProductCardProps {
  children?: React.ReactNode;
  className?: string;
  title?: React.ReactNode;
  category?: React.ReactNode;
  tags?: React.ReactNode[];
  media?: {
    src: string;
    as?: React.ElementType;
  };
  layout?: 'vertical' | 'horizontal';
  dataTestId?: string;
}

const ProductCard = ({
  children,
  className,
  title,
  category,
  tags,
  media,
  layout = 'vertical',
  dataTestId = 'product-card',
}: IProductCardProps) => {
  const ImageComponent = media?.as || 'img';

  return (
    <div
      className={cn('group flex flex-col', className)}
      data-testid={dataTestId}
    >
      {(() => {
        switch (layout) {
          case 'horizontal':
            return (
              <div className='flex gap-2'>
                {media && (
                  <>
                    <div
                      className='bg-muted relative overflow-hidden rounded-lg'
                      data-testid={`${dataTestId}-media`}
                    >
                      <ImageComponent
                        className='aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105'
                        src={media.src}
                        alt={title}
                        width={200}
                        height={200}
                      />
                      <div
                        className={`absolute inset-0 flex items-end justify-center bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                      />
                    </div>
                  </>
                )}
                <div className='min-w1/2 flex w-full flex-col gap-1'>
                  {title && (
                    <Typography
                      as='h3'
                      variant='h2'
                      dataTestId={`${dataTestId}-title`}
                    >
                      {title}
                    </Typography>
                  )}
                  {category && (
                    <Typography
                      className='text-muted-foreground'
                      dataTestId={`${dataTestId}-category`}
                    >
                      {category}
                    </Typography>
                  )}
                  {children}
                  {tags && (
                    <div
                      className='mt-auto flex flex-wrap gap-1'
                      data-testid={`${dataTestId}-tags`}
                    >
                      {tags.map((tag, index) => (
                        <Typography
                          className='rounded-full border p-1 text-xs whitespace-nowrap'
                          as='span'
                          dataTestId={`${dataTestId}-tag-${index}`}
                          key={index}
                        >
                          {tag}
                        </Typography>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          case 'vertical':
          default:
            return (
              <>
                {media && (
                  <div
                    className='bg-muted relative mb-4 overflow-hidden rounded-lg'
                    data-testid={`${dataTestId}-media`}
                  >
                    <ImageComponent
                      className='aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105'
                      src={media.src}
                      alt={title}
                      width={300}
                      height={300}
                    />
                    <div
                      className={`absolute inset-0 flex items-end justify-center bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />
                  </div>
                )}
                <div className='flex flex-1 flex-col gap-1'>
                  {category && (
                    <Typography
                      className='text-muted-foreground'
                      dataTestId={`${dataTestId}-category`}
                    >
                      {category}
                    </Typography>
                  )}
                  {title && (
                    <Typography
                      as='h3'
                      variant='h3'
                      dataTestId={`${dataTestId}-title`}
                    >
                      {title}
                    </Typography>
                  )}
                  {children}
                  {tags && (
                    <div
                      className='mt-auto flex flex-wrap gap-1'
                      data-testid={`${dataTestId}-tags`}
                    >
                      {tags.map((tag, index) => (
                        <Typography
                          className='rounded-full border p-1 text-xs whitespace-nowrap'
                          as='span'
                          dataTestId={`${dataTestId}-tag-${index}`}
                          key={index}
                        >
                          {tag}
                        </Typography>
                      ))}
                    </div>
                  )}
                </div>
              </>
            );
        }
      })()}
    </div>
  );
};

export default ProductCard;
