"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay, EffectFade, Parallax } from "swiper/modules";
import Play from "../icon/play";
import Pause from "../icon/pause";

// 이미지 경로를 import
// import image1 from "../../img/slide/slide1.jpg";
// import image2 from "../../img/slide/slide2.jpg";
// import image3 from "../../img/slide/slide3.jpg";
// import image4 from "../../img/slide/slide4.jpg";
// import PlayIcon from "../icon/play";
// import PauseIcon from "../icon/pause";
// import slice1 from "../../img/slide/700-1.webp";
// import slice2 from "../../img/slide/700-2.webp";
// import slice3 from "../../img/slide/700-3.webp";
// import slice4 from "../../img/slide/700-4.webp";

const MySwiper = () => {
  const swiperRef = useRef(null);

  // 슬라이드 재생/정지 상태를 관리하는 state
  const [isPlaying, setIsPlaying] = useState(true);

  // 재생/정지 상태를 전환하는 함수
  const toggleAutoplay = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (isPlaying) {
        swiperRef.current.swiper.autoplay.stop(); // 슬라이드 정지
      } else {
        swiperRef.current.swiper.autoplay.start(); // 슬라이드 재생
      }
      setIsPlaying(!isPlaying); // 재생/정지 상태 토글
    }
  };

  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectFade, Parallax]}
      ref={swiperRef}
      allowTouchMove={false}
      loop={true}
      parallax={true}
      effect={"fade"}
      autoplay={{
        delay: 5000,
      }}
      pagination={{
        bulletClass:
          " pr-auto w-2 h-2 rounded-lg bg-gray-700 m-2 mt-0 cursor-pointer mb-16",
        bulletActiveClass: "bg-slate-50 w-10 px-3",
        el: ".swiper-pagination-custom",
        clickable: true,
      }}
      className="w-full relative"
    >
      <SwiperSlide className=" flex relative">
        <div className=" absolute bottom-0 pb-16 pl-5 md:p-8 lg:p-12">
          <div className="lg:text-5xl text-white mb-7 text-4xl">
            MW09 True Wireless Earphones
          </div>
          <div className="text-white mb-7">
            Our newest active noise-cancelling earphones
          </div>
          <button className="cursor-pointer bg-white text-blacktext-base hover:bg-gray-200 px-8 py-4 text-sm font-semibold text-gray-700">
            Shop Now
          </button>
        </div>
        <picture>
          <source srcSet="img/slide/700-1.webp" media="(max-width: 699px)" />
          <img src="img/slide/slide1.jpg" alt="사진변환" />
        </picture>
      </SwiperSlide>
      <SwiperSlide className=" flex relative">
        <div className=" absolute bottom-0 pb-16 pl-5 md:p-8 lg:p-12">
          <div className="lg:text-5xl text-white mb-7 text-4xl">
            MG20 Wireless Gaming
            <p>Headphones</p>
          </div>
          <div className="text-white mb-7">Never Play the Same</div>
          <button className="cursor-pointer bg-white text-blacktext-base hover:bg-gray-200 px-8 py-4 text-sm font-semibold text-gray-700">
            Shop Now
          </button>
        </div>
        <picture>
          <source srcSet="img/slide/700-2.webp" media="(max-width: 699px)" />
          <img src="img/slide/slide2.jpg" alt="사진변환" />
        </picture>
      </SwiperSlide>
      <SwiperSlide className=" flex relative">
        <div className=" absolute bottom-0 pb-16 pl-5 md:p-8 lg:p-12">
          <div className="lg:text-5xl text-white mb-7 text-4xl">
            MW75 Active Noise-Cancelling
            <p>Wireless Headphones</p>
          </div>
          <div className="text-white mb-7">Perfect silence, perfect sound</div>
          <button className="cursor-pointer bg-white text-blacktext-base hover:bg-gray-200 px-8 py-4 text-sm font-semibold text-gray-700">
            Shop Now
          </button>
        </div>
        <picture>
          <source srcSet="img/slide/700-3.webp" media="(max-width: 699px)" />
          <img src="img/slide/slide3.jpg" alt="사진변환" />
        </picture>
      </SwiperSlide>
      <SwiperSlide className=" flex relative">
        <div className=" absolute bottom-0 pb-16 pl-5 md:p-8 lg:p-12">
          <div className="lg:text-5xl text-white mb-7 text-4xl">
            MH40 Wireless Headphones
          </div>
          <div className="text-white mb-7">
            Iconic design and brilliant acoustics
          </div>
          <button className="cursor-pointer bg-white text-blacktext-base hover:bg-gray-200 px-8 py-4 text-sm font-semibold text-gray-700">
            Shop Now
          </button>
        </div>
        <picture>
          <source srcSet="img/slide/700-4.webp" media="(max-width: 699px)" />
          <img src="img/slide/slide4.jpg" alt="사진변환" />
        </picture>
      </SwiperSlide>
      <div className="swiper-pagination-custom flex justify-end pr-[4rem] md:pr-[20rem] lg:pr-[21rem] md:ml-60 absolute z-20 h-10 md:h-12 lg:h-[4rem] xxl:h-[4.5rem]"></div>
      <div className="absolute bottom-4 right-5 md:right-10 lg:right-12 z-50 md:bottom-6 lg:bottom-[2.5rem] xxl:bottom-[3rem]">
        <button onClick={toggleAutoplay}>
          {isPlaying ? (
            <Pause className="w-20 h-20" />
          ) : (
            <Play className="w-20 h-20" />
          )}
        </button>
      </div>
    </Swiper>
  );
};

export default MySwiper;
