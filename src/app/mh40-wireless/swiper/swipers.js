"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import CollaborationColors from "../../mw75/modal/collaborationColors";

import {
  Pagination,
  Parallax,
  FreeMode,
  Navigation,
  Thumbs,
  Scrollbar,
} from "swiper/modules";

const Swipers = ({}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [image1, setImage1] = useState(
    "/img/pagemh40-wireless/swiperImg/1/MH40B1-W2-PDP_1.webp"
  );
  const [image2, setImage2] = useState(
    "/img/pagemh40-wireless/swiperImg/1/MH40B1-W2-PDP_2.webp"
  );
  const [image3, setImage3] = useState(
    "/img/pagemh40-wireless/swiperImg/1/MH40B1-W2-PDP_3.webp"
  );
  const [image4, setImage4] = useState(
    "/img/pagemh40-wireless/swiperImg/1/MH40B1-W2-PDP_4.webp"
  );
  const [image5, setImage5] = useState(
    "/img/pagemh40-wireless/swiperImg/1/MH40B1-W2-PDP_5.webp"
  );
  const [color, setcolor] = useState("(Black Metal / Black Leather)");

  const handleClick1 = () => {
    setImage1("/img/pagemh40-wireless/swiperImg/1/MH40B1-W2-PDP_1.webp");
    setImage2("/img/pagemh40-wireless/swiperImg/1/MH40B1-W2-PDP_2.webp");
    setImage3("/img/pagemh40-wireless/swiperImg/1/MH40B1-W2-PDP_3.webp");
    setImage4("/img/pagemh40-wireless/swiperImg/1/MH40B1-W2-PDP_4.webp");
    setImage5("/img/pagemh40-wireless/swiperImg/1/MH40B1-W2-PDP_5.webp");
    setcolor("(Black Metal / Black Leather)");
  };
  const handleClick2 = () => {
    setImage1("/img/pagemh40-wireless/swiperImg/2/MH40G4-W2-PDP_1.webp");
    setImage2("/img/pagemh40-wireless/swiperImg/2/MH40G4-W2-PDP_2.webp");
    setImage3("/img/pagemh40-wireless/swiperImg/2/MH40G4-W2-PDP_3.webp");
    setImage4("/img/pagemh40-wireless/swiperImg/2/MH40G4-W2-PDP_4.webp");
    setImage5("/img/pagemh40-wireless/swiperImg/2/MH40G4-W2-PDP_5.webp");
    setcolor("(Gunmetal / Navy Leather)");
  };
  const handleClick3 = () => {
    setImage1("/img/pagemh40-wireless/swiperImg/3/MH40S1-W2-PDP_1.webp");
    setImage2("/img/pagemh40-wireless/swiperImg/3/MH40S1-W2-PDP_2.webp");
    setImage3("/img/pagemh40-wireless/swiperImg/3/MH40S1-W2-PDP_3.webp");
    setImage4("/img/pagemh40-wireless/swiperImg/3/MH40S1-W2-PDP_4.webp");
    setImage5("/img/pagemh40-wireless/swiperImg/3/MH40S1-W2-PDP_5.webp");
    setcolor("(Silver Metal / Black Leather)");
  };
  const handleClick4 = () => {
    setImage1("/img/pagemh40-wireless/swiperImg/4/MH40G1-W2-PDP_1.webp");
    setImage2("/img/pagemh40-wireless/swiperImg/4/MH40G1-W2-PDP_2.webp");
    setImage3("/img/pagemh40-wireless/swiperImg/4/MH40G1-W2-PDP_3.webp");
    setImage4("/img/pagemh40-wireless/swiperImg/4/MH40G1-W2-PDP_4.webp");
    setImage5("/img/pagemh40-wireless/swiperImg/4/MH40G1-W2-PDP_5.webp");
    setcolor("(Gunmetal / Black Leather)");
  };
  const handleClick5 = () => {
    setImage1("/img/pagemh40-wireless/swiperImg/5/MH40S4-W2-PDP_1.webp");
    setImage2("/img/pagemh40-wireless/swiperImg/5/MH40S4-W2-PDP_2.webp");
    setImage3("/img/pagemh40-wireless/swiperImg/5/MH40S4-W2-PDP_3.webp");
    setImage4("/img/pagemh40-wireless/swiperImg/5/MH40S4-W2-PDP_4.webp");
    setImage5("/img/pagemh40-wireless/swiperImg/5/MH40S4-W2-PDP_5.webp");
    setcolor("(Silver Metal / Navy Leather)");
  };
  const handleClick6 = () => {
    setImage1("/img/pagemh40-wireless/swiperImg/6/MH40S2-W2-PDP_1.webp");
    setImage2("/img/pagemh40-wireless/swiperImg/6/MH40S2-W2-PDP_2.webp");
    setImage3("/img/pagemh40-wireless/swiperImg/6/MH40S2-W2-PDP_3.webp");
    setImage4("/img/pagemh40-wireless/swiperImg/6/MH40S2-W2-PDP_4.webp");
    setImage5("/img/pagemh40-wireless/swiperImg/6/MH40S2-W2-PDP_5.webp");
    setcolor("(Silver Metal / Brown Leather)");
  };
  const handleClick7 = () => {
    setImage1("/img/pagemh40-wireless/swiperImg/7/MH40S3-W2-PDP_1.webp");
    setImage2("/img/pagemh40-wireless/swiperImg/7/MH40S3-W2-PDP_2.webp");
    setImage3("/img/pagemh40-wireless/swiperImg/7/MH40S3-W2-PDP_3.webp");
    setImage4("/img/pagemh40-wireless/swiperImg/7/MH40S3-W2-PDP_4.webp");
    setImage5("/img/pagemh40-wireless/swiperImg/7/MH40S3-W2-PDP_5.webp");
    setcolor("(Silver Metal / Grey Leather)");
  };
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
        watchOverflow={true}
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
        <div className="">
          <img
            className=" absolute z-50 top-0 h-16 left-5"
            src="img/pagemh40-wireless/swiperImg/WIRED_recommends_2023.webp"
            alt="사진변환"
          />
          <img
            className=" absolute z-50 top-0 h-16 left-20"
            src="img/pagemh40-wireless/swiperImg/red_dot_2023.png"
            alt="사진변환"
          />
        </div>
        <div className="swiper-button-next after:text-slate-700 rounded-full"></div>
        <div className="swiper-button-prev after:text-slate-700 rounded-full"></div>
      </Swiper>
      <div className="px-3">
        <Swiper
          onSwiper={setThumbsSwiper}
          // spaceBetween={10}
          slidesPerView={5}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs, Scrollbar]}
          // scrollbar={{ el: ".swiper-scrollbar", draggable: true }}
          className="mySwiper "
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
          <div className="swiper-scrollbar bg-white"></div>
        </Swiper>
      </div>
      <div className="px-5">
        <div className="py-5 text-xl">MH40 Wireless</div>
        <div className="font-extralight text-sm pb-3">
          Wireless Over-Ear Headphones
        </div>
        <div className="flex items-center pb-7">
          <div className="text-lg font-medium text-gray-600 pr-1">€449,00</div>
          <div className="flex text-xs  rounded-md bg-zinc-700 text-white text-center items-center px-2 py-0 h-5">
            Sold out
          </div>
        </div>
        <div className="text-sm">Color {color}</div>
        <div className="bg-gray-200 h-[1px] w-full my-2"></div>
        <div className="flex space-x-1 pb-5">
          <div className="b-[1px] border-gray-700 p-1 bg-white">
            <img
              onClick={handleClick1}
              className="w-5 h-5 rounded-full  border-[1px] cursor-pointer border-gray-700 focus:outline-none focus:border-white focus:ring-gray-700 "
              src="/img/feature/color/MH40/MH40_first_color.jpg"
            />
          </div>
          <div className="b-[1px] border-gray-700 p-1 bg-white">
            <img
              onClick={handleClick2}
              className="w-5 h-5 rounded-full  border-[1px] cursor-pointer border-gray-700 focus:outline-none focus:border-white focus:ring-gray-700 "
              src="/img/feature/color/MH40/MH40_second_color.jpg"
            />
          </div>
          <div className="b-[1px] border-gray-700 p-1 bg-white">
            <img
              onClick={handleClick3}
              className="w-5 h-5 rounded-full  border-[1px] cursor-pointer border-gray-700 focus:outline-none focus:border-white focus:ring-gray-700 "
              src="/img/feature/color/MH40/MH40_third_color.jpg"
            />
          </div>
          <div className="b-[1px] border-gray-700 p-1 bg-white">
            <img
              onClick={handleClick4}
              className="w-5 h-5 rounded-full  border-[1px] cursor-pointer border-gray-700 focus:outline-none focus:border-white focus:ring-gray-700 "
              src="/img/feature/color/MH40/MH40_fourth_color.jpg"
            />
          </div>
          <div className="b-[1px] border-gray-700 p-1 bg-white">
            <img
              onClick={handleClick5}
              className="w-5 h-5 rounded-full  border-[1px] cursor-pointer border-gray-700 focus:outline-none focus:border-white focus:ring-gray-700 "
              src="/img/feature/color/MH40/MH40_fifth_color.jpg"
            />
          </div>
          <div className="b-[1px] border-gray-700 p-1 bg-white">
            <img
              onClick={handleClick6}
              className="w-5 h-5 rounded-full  border-[1px] cursor-pointer border-gray-700 focus:outline-none focus:border-white focus:ring-gray-700 "
              src="/img/feature/color/MH40/MH40_sixth_color.jpg"
            />
          </div>
          <div className="b-[1px] border-gray-700 p-1 bg-white">
            <img
              onClick={handleClick7}
              className="w-5 h-5 rounded-full  border-[1px] cursor-pointer border-gray-700 focus:outline-none focus:border-white focus:ring-gray-700 "
              src="/img/feature/color/MH40/MH40_seventh_color.jpg"
            />
          </div>
        </div>
        <button className="cursor-pointer bg-gray-200 w-full text-blacktext-base hover:bg-gray-200 px-8 py-4 text-sm font-semibold text-gray-700 border-2 border-gray-300">
          SOLD OUT
        </button>
      </div>
    </div>
  );
};

export default Swipers;
