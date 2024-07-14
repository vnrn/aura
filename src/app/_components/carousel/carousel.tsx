"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import './carousel.scss';
import { CarouselProductCard, CarouselProductSkeleton } from "./CarouselCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({data,loading}:any) {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }:any) => (
    <div className="arrow" {...props}>
      <ChevronLeft />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }:any) => (
    <div className="arrow" {...props}>
      <ChevronRight />
    </div>
  );
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      // initialSlide: 2,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3,
            dots: true
          }
        },
        //mobile
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true
          }
        }
      ]
    };
    const fakeArr = [
      {},
      {},
      {},
      {},
    ]
    return (
     <div className="card__container">
        <Slider {...settings} className="card__container--inner">
            {loading ? (
                fakeArr.map((item:any, index:any) => (
                    <CarouselProductSkeleton key={index} />
                )) 

            ) : (
              data.map((product: any) => (
                <>
                    <CarouselProductCard 
                        key={product.id}
                        {...product}
                    />
                </>
            ))
          )}
        </Slider>
     </div>
    );
}