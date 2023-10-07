import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ images }) => {
  return (
    <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={3000} width="900px" showThumbs={false}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image} 
            alt={`Image ${index + 1}`}
            className="z-10 relative max-h-[700px] max-w-[900px]"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
