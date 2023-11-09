import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ images }) => {
  return (
    <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={3000} width="800px" showThumbs={false}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image} 
            alt={`Image ${index + 1}`}
            className="z-10 relative sm:max-h-[600px] sm:max-w-[200px] md:max-w-[800px] md:max-h-[800px] xl:max-h-[800px] xl:max-w-[1000px] max-h-[700px] max-w-[800px]"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
