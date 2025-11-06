import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@packages/shared-ui/components';
import Image from 'next/image';

import { TProduct } from '@api/products/types';

interface IMediaProps {
  images: TProduct['images'];
  title: TProduct['title'];
}

const Media = ({ images, title }: IMediaProps) => {
  return (
    <section className='p-8'>
      <Carousel opts={{ align: 'start' }} className='w-full'>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <Image src={image} alt={title} width={300} height={200} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Media;
