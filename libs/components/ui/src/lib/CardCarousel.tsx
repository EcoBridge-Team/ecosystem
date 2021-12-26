import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface CarouselProps {
  title?: string;
  items: any;
  children: React.ReactNode;
}

export const CardCarousel = (props: CarouselProps): JSX.Element => {
  const { title, items, children } = props;
  return (
    <div className="mt-5">
      <h3 className="w-full text-3xl md:text-5xl text-center md:text-left font-extrabold text-green-600 mb-4 md:ml-3 antialiased sm:subpixel-antialiased md:antialiased">
        {title}
      </h3>
      <Carousel responsive={items}>{children}</Carousel>
    </div>
  );
};
