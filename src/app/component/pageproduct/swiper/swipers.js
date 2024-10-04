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

const Swipers = ({
  image1,
  setImage1,
  image2,
  setImage2,
  image3,
  setImage3,
  image4,
  setImage4,
  image5,
  setImage5,
  image6,
  setImage6,
}) => {
  // const [image1, setImage1] = useState(
  //   "/img/page-product/swiperImg/MW75S4-PDP_1.webp"
  // );
  // const [image2, setImage2] = useState(
  //   "/img/page-product/swiperImg/MW75S4-PDP_2.webp"
  // );
  // const [image3, setImage3] = useState(
  //   "/img/page-product/swiperImg/MW75S4-PDP_3.webp"
  // );
  // const [image4, setImage4] = useState(
  //   "/img/page-product/swiperImg/MW75S4-PDP_4.webp"
  // );
  // const [image5, setImage5] = useState(
  //   "/img/page-product/swiperImg/MW75S4-PDP_5.webp"
  // );
  // const [image6, setImage6] = useState(
  //   "/img/page-product/swiperImg/MW75S4-PDP_6.webp"
  // );
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
          <img src={image1} alt="사진변환" />
        </SwiperSlide>
        <SwiperSlide className=" flex relative">
          <img src={image2} alt="사진변환" />
        </SwiperSlide>
        <SwiperSlide className=" flex relative">
          <img src={image3} alt="사진변환" />
        </SwiperSlide>
        <SwiperSlide className=" flex relative">
          <img src={image4} alt="사진변환" />
        </SwiperSlide>
        <SwiperSlide className=" flex relative">
          <img src={image5} alt="사진변환" />
        </SwiperSlide>
        <SwiperSlide className=" flex relative">
          <img src={image6} alt="사진변환" />
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
        <div className="swiper-button-next after:text-slate-700 rounded-full"></div>
        <div className="swiper-button-prev after:text-slate-700 rounded-full"></div>
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
          <img src={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image6} />
        </SwiperSlide>
        <div className="swiper-scrollbar bg-white"></div>
      </Swiper>
    </div>
  );
};

export default Swipers;
