"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

import {
  Pagination,
  Parallax,
  FreeMode,
  Navigation,
  Thumbs,
  Scrollbar,
} from "swiper/modules";

const Swipers = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <Swiper
        modules={[
          Pagination,
          Parallax,
          FreeMode,
          Navigation,
          Thumbs,
          Scrollbar,
        ]}
        parallax={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        className="w-full relative"
        scrollbar={{ el: ".swiper-scrollbar", draggable: true }}
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
        <div className="swiper-button-next text-slate-700 rounded-full"></div>
        <div className="swiper-button-prev text-slate-700 rounded-full"></div>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        // spaceBetween={10}
        slidesPerView={6}
        // freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, Scrollbar]}
        // scrollbar={{ el: ".swiper-scrollbar", draggable: true }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="img/page-product/MW75S4-PDP_1.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/page-product/MW75S4-PDP_2.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/page-product/MW75S4-PDP_3.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/page-product/MW75S4-PDP_4.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/page-product/MW75S4-PDP_5.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/page-product/MW75S4-PDP_6.webp" />
        </SwiperSlide>
        <div className="swiper-scrollbar bg-white"></div>
      </Swiper>
    </div>
  );
};

export default Swipers;
