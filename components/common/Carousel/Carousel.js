import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  CarouselContainer,
  CarouselItem,
  CarouselItems,
} from "./CarouselStyle";

import Image from "next/image";
const carouselImages = [
  "carousel1.jpg",
  "carousel2.jpg",
  "carousel3.jpg",
  "carousel4.jpg",
  "carousel5.jpg",
];
const CarouselImage = styled(Image)`
  object-position: center;
  opacity: ${(props) => {
    return props.opace ? 1 : 0;
  }};
  width: 100%;

  @media (max-width: 750px) {
    height: 290px;
  }

  @media (max-width: 600px) {
    height: 200px;
  }
`;

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      let newImage = currentImage + 1;
      if (newImage >= carouselImages.length) {
        newImage = 0;
      }
      setCurrentImage(newImage);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [currentImage]);

  return (
    <CarouselContainer>
      <CarouselItems
        style={{
          transform: `translateX(-${currentImage * 100}%)`,
        }}
      >
        {carouselImages.map((image, index) => {
          return (
            <CarouselItem key={index}>
              <CarouselImage
                src={`/images/${image}`}
                alt="deals_images"
                width={700}
                height={500}
                opace={currentImage === index}
              />
            </CarouselItem>
          );
        })}
      </CarouselItems>
    </CarouselContainer>
  );
};

export default Carousel;
