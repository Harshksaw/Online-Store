import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { BiArrowBack, BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

import { Carousel } from "react-responsive-carousel";
import Image from "next/image"
import React from "react";
import slide1 from "../public/Herobanner/s3.jpg"
import slide2 from "../public/Herobanner/s1.jpeg"
import slide3 from "../public/Herobanner/s2.jpeg"

export const HeroBanner = () => {
  const arrowStyles = {"position":"absolute","zIndex":2,"top":"calc(50% - 15px)","width":30,"height":30,"cursor":"pointer","borderRadius":"50%","backgroundColor":"rgba(0,0,0,0.5)","display":"flex","alignItems":"center","justifyContent":"center" ,"color":"yellow"}
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
      <Carousel
      autoPlay = {true}
      infiniteLoop ={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(clickHandler, hasPrev, label) =>{
        if(!hasPrev){
          return null;
        }
        return (
          <button
          type="button"
          onClick={clickHandler}
          title={label}
          style={{...arrowStyles, left:15}}
          >
            <BiArrowFromRight size={30} />
          </button>
        )
      }}
      renderArrowNext={(clickHandler, hasPrev, label) =>{
        if(!hasPrev){
          return null;
        }
        return (
          <button
          type="button"
          onClick={clickHandler}
          title={label}
          style={{...arrowStyles, right:15}}
          >
            <BiArrowFromLeft size={30} />
          </button>
        )
      }}
      >

        <div>
          <Image
            src={slide1}
            className="aspect-[16/10] md:aspect-auto object-cover"

          />
         
        </div>
        <div>
       <Image
            src={slide2}
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
         
        </div>
        <div>
       <Image
            src={slide3}
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
        
        </div>

      </Carousel>
    </div>
  );
};