"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import banner from "@/app/ass/slider3.png";
import Button from "../components/ui/Button";
// TODO: slider style change accroding figma design
const SliderBanner = () => {
  return (
    <div>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {[...Array(10)].map((e, i) => (
          <SwiperSlide
            className="bg-cover bg-no-repeat w-full h-full pl-[60px] py-10 rounded-[10px]"
            style={{ backgroundImage: `url(${banner.src})` }}
            key={i}
          >
            <div className="h-full text-white flex flex-col justify-center">
              <div className="text-[30px] flex flex-col">
                <p className=" font-bold">Noise Cancelling</p>
                <p className="font-normal">Headphone</p>
              </div>
              <div className="text-sm mt-6 mb-10">
                <p>Boso Over-Ear Headphone</p>
                <p>Wifi, Voice Assistant,</p>
                <p>Low latency game mde</p>
              </div>
              <Button text="BUY NOW" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderBanner;
