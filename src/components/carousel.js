import React from 'react';
import Image from 'next/image';
import image1 from '../images/fff.png';
import image2 from '../images/ededed.png';
import image3 from '../images/fff (1).png';
import { Carousel  } from 'react-responsive-carousel';

const Test = () => {
  const images = [image1, image2, image3]
  return (<Carousel infiniteLoop={true} showThumbs={false} >
    {images.map((image, i) => {
      return (
        <div key={i}>
          <Image src={image} width={1600} height={360} />
        </div>
      )
    })}
  </Carousel>)


};

export default Test;