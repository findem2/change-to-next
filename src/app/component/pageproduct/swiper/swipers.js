"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

import { Pagination, Parallax, Navigation } from "swiper/modules";

const Swipers = () => {
  return (
    <Swiper
      modules={[Pagination, Parallax, Navigation]}
      parallax={true}
      className="w-full relative"
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }} // 네비게이터 모양
    >
      <SwiperSlide className=" flex relative">
        <img src="img/page-product/MW75S4-PDP_1.webp" alt="사진변환" />
      </SwiperSlide>
      <SwiperSlide className=" flex relative">
        <img src="img/page-product/MW75S4-PDP_2.webp" alt="사진변환" />
      </SwiperSlide>
      <SwiperSlide className=" flex relative">
        <img src="img/page-product/MW75S4-PDP_3.webp" alt="사진변환" />
      </SwiperSlide>
      <SwiperSlide className=" flex relative">
        <img src="img/page-product/MW75S4-PDP_4.webp" alt="사진변환" />
      </SwiperSlide>
      <SwiperSlide className=" flex relative">
        <img src="img/page-product/MW75S4-PDP_5.webp" alt="사진변환" />
      </SwiperSlide>
      <SwiperSlide className=" flex relative">
        <img src="img/page-product/MW75S4-PDP_6.webp" alt="사진변환" />
      </SwiperSlide>
      <div className="">
        <img
          className=" absolute z-50 top-0 h-16 left-5"
          src="img/page-product/WIRED_recommends_2023.webp"
          alt="사진변환"
        />
        <img
          className=" absolute z-50 top-0 h-16 left-20"
          src="img/page-product/red_dot_2023.png"
          alt="사진변환"
        />
      </div>
      <div className="swiper-button-next text-white bg-black p-2 rounded-full"></div>
      <div className="swiper-button-prev text-white bg-black p-2 rounded-full"></div>
    </Swiper>
  );
};

export default Swipers;
