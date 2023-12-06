import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ images }) => {
  return (
    <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={3000} showThumbs={false} className="relative">
      {images.map((image, index) => (
        <div key={index} className="w-full">
          <Image
            src={image} 
            alt={`Image ${index + 1}`}
            width="800"
            height="600"
            className="w-full object-cover max-h-[600px] 2xl:max-h-[800px]"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
