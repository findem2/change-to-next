"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import CollaborationColors from "../modal/collaborationColors";

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
    "/img/pagemw75/swiperImg/1/MW75S3-PDP_1.webp"
  );
  const [image2, setImage2] = useState(
    "/img/pagemw75/swiperImg/1/MW75S3-PDP_2.webp"
  );
  const [image3, setImage3] = useState(
    "/img/pagemw75/swiperImg/1/MW75S3-PDP_3.webp"
  );
  const [image4, setImage4] = useState(
    "/img/pagemw75/swiperImg/1/MW75S3-PDP_4.webp"
  );
  const [image5, setImage5] = useState(
    "/img/pagemw75/swiperImg/1/MW75S3-PDP_5.webp"
  );
  const [image6, setImage6] = useState(
    "/img/pagemw75/swiperImg/1/MW75S5-PDP_6.webp"
  );
  const [image7, setImage7] = useState();
  const [color, setcolor] = useState("(Silver Metal / Grey Leather)");

  const handleClick1 = () => {
    setImage1("/img/pagemw75/swiperImg/1/MW75S3-PDP_1.webp");
    setImage2("/img/pagemw75/swiperImg/1/MW75S3-PDP_2.webp");
    setImage3("/img/pagemw75/swiperImg/1/MW75S3-PDP_3.webp");
    setImage4("/img/pagemw75/swiperImg/1/MW75S3-PDP_4.webp");
    setImage5("/img/pagemw75/swiperImg/1/MW75S3-PDP_5.webp");
    setImage6("/img/pagemw75/swiperImg/1/MW75S3-PDP_6.webp");
    setcolor("(Silver Metal / Grey Leather)");
  };
  const handleClick2 = () => {
    setImage1("/img/pagemw75/swiperImg/2/MW75S4-PDP_1.webp");
    setImage2("/img/pagemw75/swiperImg/2/MW75S4-PDP_2.webp");
    setImage3("/img/pagemw75/swiperImg/2/MW75S4-PDP_3.webp");
    setImage4("/img/pagemw75/swiperImg/2/MW75S4-PDP_4.webp");
    setImage5("/img/pagemw75/swiperImg/2/MW75S4-PDP_5.webp");
    setImage6("/img/pagemw75/swiperImg/2/MW75S4-PDP_6.webp");
    setcolor("(Silver Metal / Navy Leather)");
  };
  const handleClick3 = () => {
    setImage1("/img/pagemw75/swiperImg/3/MW75S2-PDP_1.webp");
    setImage2("/img/pagemw75/swiperImg/3/MW75S2-PDP_2.webp");
    setImage3("/img/pagemw75/swiperImg/3/MW75S2-PDP_3.webp");
    setImage4("/img/pagemw75/swiperImg/3/MW75S2-PDP_4.webp");
    setImage5("/img/pagemw75/swiperImg/3/MW75S2-PDP_5.webp");
    setImage6("/img/pagemw75/swiperImg/3/MW75S2-PDP_6.webp");
    setImage7("/img/pagemw75/swiperImg/3/MW75S2-PDP_7.webp");
    setcolor("(Silver Metal / Brown Leather)");
  };
  const handleClick4 = () => {
    setImage1("/img/pagemw75/swiperImg/4/MW75G1-PDP_1.webp");
    setImage2("/img/pagemw75/swiperImg/4/MW75G1-PDP_2.webp");
    setImage3("/img/pagemw75/swiperImg/4/MW75G1-PDP_3.webp");
    setImage4("/img/pagemw75/swiperImg/4/MW75G1-PDP_4.webp");
    setImage5("/img/pagemw75/swiperImg/4/MW75G1-PDP_5.webp");
    setImage6("/img/pagemw75/swiperImg/4/MW75G1_PDP_6.webp");
    setImage7("/img/pagemw75/swiperImg/4/MW75G1_PDP_7.webp");
    setcolor("(Gunmetal / Black Leather)");
  };
  const handleClick5 = (i) => {
    setImage1("/img/pagemw75/swiperImg/5/MW75S1-PDP_1.webp");
    setImage2("/img/pagemw75/swiperImg/5/MW75S1-PDP_2.webp");
    setImage3("/img/pagemw75/swiperImg/5/MW75S1-PDP_3.webp");
    setImage4("/img/pagemw75/swiperImg/5/MW75S1-PDP_4.webp");
    setImage5("/img/pagemw75/swiperImg/5/MW75S1-PDP_5.webp");
    setImage6("/img/pagemw75/swiperImg/5/MW75S1-PDP_6.webp");
    setcolor("(Silver Metal / Black Leather)");
  };
  const handleClick6 = () => {
    setImage1("/img/pagemw75/swiperImg/6/MW75B1-PDP_1.webp");
    setImage2("/img/pagemw75/swiperImg/6/MW75B1-PDP_2.webp");
    setImage3("/img/pagemw75/swiperImg/6/MW75B1-PDP_3.webp");
    setImage4("/img/pagemw75/swiperImg/6/MW75B1-PDP_4.webp");
    setImage5("/img/pagemw75/swiperImg/6/MW75B1-PDP_5.webp");
    setImage6("/img/pagemw75/swiperImg/6/MW75B1-PDP_6.webp");
    setImage7("/img/pagemw75/swiperImg/6/MW75B1-PDP_7.webp");
    setcolor("(Black Metal / Black Leather)");
  };
  const handleClick7 = () => {
    setImage1("/img/pagemw75/swiperImg/7/MW75G4-PDP_1.webp");
    setImage2("/img/pagemw75/swiperImg/7/MW75G4-PDP_2.webp");
    setImage3("/img/pagemw75/swiperImg/7/MW75G4-PDP_3.webp");
    setImage4("/img/pagemw75/swiperImg/7/MW75G4-PDP_4.webp");
    setImage5("/img/pagemw75/swiperImg/7/MW75G4-PDP_5.webp");
    setImage6("/img/pagemw75/swiperImg/7/MW75G4-PDP_6.webp");
    setcolor("(Gunmetal / Navy Leather)");
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
        <SwiperSlide className=" flex relative">
          <img src={image6} alt="사진변환" />
        </SwiperSlide>

        <div className="">
          <img
            className=" absolute z-50 top-0 h-16 left-5"
            src="img/pagemw75/swiperImg/WIRED_recommends_2023.webp"
            alt="사진변환"
          />
          <img
            className=" absolute z-50 top-0 h-16 left-20"
            src="img/pagemw75/swiperImg/red_dot_2023.png"
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
        <SwiperSlide>
          <img src={image7} />
        </SwiperSlide>
        <div className="swiper-scrollbar bg-white"></div>
      </Swiper>
      <div className="px-5">
        <div className="py-5 text-xl">MW75</div>
        <div className="font-extralight text-sm pb-3">
          Active Noise-Cancelling Wireless Headphones
        </div>
        <div className="flex items-center pb-7">
          <div className="text-lg font-medium text-gray-600 pr-1">€629,00</div>
          <div className="flex text-xs  rounded-md bg-zinc-700 text-white text-center items-center px-2 py-0 h-5">
            Sold out
          </div>
        </div>
        <div className="text-sm">Color {color}</div>
        <div className="bg-gray-200 h-[1px] w-full my-2"></div>
        <div className="flex space-x-1">
          <div className="b-[1px] border-gray-700 p-1 bg-white">
            <img
              onClick={handleClick1}
              className="w-5 h-5 rounded-full  border-[1px] cursor-pointer border-gray-700 focus:outline-none focus:border-white focus:ring-gray-700 "
              src="/img/feature/color/MW75/MW75_first_color.jpg"
            />
          </div>
          <div className="b-[1px] border-gray-700 p-1 bg-white">
            <img
              onClick={handleClick2}
              className="w-5 h-5 rounded-full  border-[1px] cursor-pointer border-gray-700 focus:outline-none focus:border-white focus:ring-gray-700 "
              src="/img/feature/color/MW75/MW75_second_color.jpg"
            />
          </div>
          <div className="b-[1px] border-gray-700 p-1 bg-white">
            <img
              onClick={handleClick3}
              className="w-5 h-5 rounded-full  border-[1px] cursor-pointer border-gray-700 focus:outline-none focus:border-white focus:ring-gray-700 "
              src="/img/feature/color/MW75/MW75_third_color.jpg"
            />
          </div>
          <div className="b-[1px] border-gray-700 p-1 bg-white">
            <img
              onClick={handleClick4}
              className="w-5 h-5 rounded-full  border-[1px] cursor-pointer border-gray-700 focus:outline-none focus:border-white focus:ring-gray-700 "
              src="/img/feature/color/MW75/MW75_ fourth_color.jpg"
            />
          </div>
          <div className="b-[1px] border-gray-700 p-1 bg-white">
            <img
              onClick={handleClick5}
              className="w-5 h-5 rounded-full  border-[1px] cursor-pointer border-gray-700 focus:outline-none focus:border-white focus:ring-gray-700 "
              src="/img/feature/color/MW75/MW75_fifth_color.jpg"
            />
          </div>
          <div className="b-[1px] border-gray-700 p-1 bg-white">
            <img
              onClick={handleClick6}
              className="w-5 h-5 rounded-full  border-[1px] cursor-pointer border-gray-700 focus:outline-none focus:border-white focus:ring-gray-700 "
              src="/img/feature/color/MW75/MW75_sixth_color.jpg"
            />
          </div>
          <div className="b-[1px] border-gray-700 p-1 bg-white">
            <img
              onClick={handleClick7}
              className="w-5 h-5 rounded-full  border-[1px] cursor-pointer border-gray-700 focus:outline-none focus:border-white focus:ring-gray-700 "
              src="/img/feature/color/MW75/MW75_seventh_color.jpg"
            />
          </div>
        </div>

        <CollaborationColors />

        <div className="bg-gray-200 h-[1px] w-full my-2"></div>
        <button className="cursor-pointer bg-gray-200 w-full text-blacktext-base hover:bg-gray-200 px-8 py-4 text-sm font-semibold text-gray-700 border-2 border-gray-300">
          SOLD OUT
        </button>
      </div>
    </div>
  );
};

export default Swipers;
