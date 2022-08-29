import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { ISneakers } from "../../models/models";

interface CarouselProps {
  sneakers: ISneakers | any
} 

const CarouselComponent:React.FC<CarouselProps> = ({sneakers}) => {
    return(
      <>
        <Carousel className="w-100 border-0" variant="dark">
          <Carousel.Item className="item border-0">
            <img
              className="d-block w-100 "
              src={sneakers.imageUrl}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="border-0">
            <img
              className="d-block w-100"
              src={sneakers.img2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className="border-0">
            <img
              className="d-block w-100"
              src={sneakers.img3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </>
    )
}
export default CarouselComponent