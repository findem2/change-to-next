"use client";

import ColorDot from "./colordot";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

import { Pagination, Parallax, FreeMode } from "swiper/modules";

const Item1 = () => {
  const [imageSrc, setImageSrc] = useState("/img/feature/MW09/MW09_Side.png");
  // const [imageSrc3, setImageSrc3] = useState("/img/feature/MW09/MW09_Side.png");
  const [isClicked, setIsClicked] = useState(false); // 클릭 여부를 state로 관리
  const [isClicked3, setIsClicked3] = useState(false); // 클릭 여부를 state로 관리

  const handleClick3 = () => {
    if (isClicked3) {
      setImageSrc("/img/feature/MW09/MW09thi_Side.webp");
      setIsClicked3(false); // 초기 상태 false 일 땐 초기 상태 이미지 src
    } else {
      setImageSrc("/img/feature/MW09/MW09thi.webp");
      setIsClicked3(true); // true일 땐 변경될 이미지 src
    }
  };

  const handleClick = () => {
    if (isClicked) {
      setImageSrc("/img/feature/MW09/MW09sec_Side.webp");
      setIsClicked(false); // 초기 상태 false 일 땐 초기 상태 이미지 src
    } else {
      setImageSrc("/img/feature/MW09/MW09sec.webp");
      setIsClicked(true); // true일 땐 변경될 이미지 src
    }
  };

  return (
    <div className="flex scrollbar-hide">
      <Swiper
        modules={[Pagination, Parallax, FreeMode]}
        parallax={true}
        spaceBetween={10}
        className="w-full  space-x-5"
        slidesPerView={1.5} //한 슬라이드에 보여줄 갯수
      >
        <SwiperSlide className="relative">
          <li className="p-5 ">
            <img src={imageSrc} />
            <div className="relative opacity-100 cursor-pointer ">
              <img src="/img/feature/MW09/MW09.png" alt="before" />
              <img
                src="/img/feature/MW09/MW09_Side.png"
                alt="after"
                className="absolute bottom-0 opacity-0 hover:opacity-100 hover:animate-fadein animate-fadeout  bg-white"
              />
            </div>
            <div className="xxl:p-[39.5px]">
              <div>
                <div>
                  <div className="TopPrice hidden lg:inline-block float-end text-gray-700">
                    From €399,00
                  </div>
                  <div className="ModelName cursor-pointer text-sm md:text-xl font-semibold text-gray-700">
                    MW09
                  </div>
                </div>
                <div className="Explain my-2 text-sm md:text-lg text-gray-500 font-light">
                  Active Noise-Cancelling True Wireless Earphones
                </div>
                <div className="UnderPrice lg:hidden text-sm  text-gray-600 font-bold">
                  From €399,00
                </div>
              </div>
              <div className="flex flex-wrap">
                {/* <input type="radio" value="ColorDot" /> */}
                <ColorDot></ColorDot>
                <div onClick={handleClick}>
                  <ColorDot></ColorDot>
                </div>
                <div onClick={handleClick3}>
                  <ColorDot></ColorDot>
                </div>
                <ColorDot></ColorDot>
                <ColorDot></ColorDot>
                <ColorDot></ColorDot>
              </div>
            </div>
            <div className=" absolute text-xs border-zinc-700 border-[1px]  rounded-[0.2rem] bg-zinc-700 text-white items-center justify-center top-3 left-6 p-1">
              Sold out
            </div>
          </li>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <li className="p-5">
            <div className="relative opacity-100 cursor-pointer ">
              <img src="/img/feature/MW75/MW75.png" alt="before" />
              <img
                src="/img/feature/MW75/MW75_Side.png"
                alt="after"
                className="absolute bottom-0 opacity-0 hover:opacity-100 hover:animate-fadein animate-fadeout  bg-white"
              />
            </div>
            <div className="xxl:p-[39.5px]">
              <div>
                <div>
                  <div className="TopPrice hidden lg:inline-block float-end text-gray-700">
                    €629,00
                  </div>
                  <div className="ModelName cursor-pointer text-sm md:text-xl font-semibold text-gray-700">
                    MW75
                  </div>
                </div>
                <div className="Explain my-2 text-sm md:text-lg text-gray-500 font-light">
                  Active Noise-Cancelling Wireless Headphones
                </div>
                <div className="UnderPrice lg:hidden text-sm  text-gray-600 font-bold">
                  €629,00
                </div>
              </div>
              <div className="flex   flex-wrap">
                <ColorDot></ColorDot>
                <ColorDot></ColorDot>
                <ColorDot></ColorDot>
                <ColorDot></ColorDot>
                <ColorDot></ColorDot>
                <ColorDot></ColorDot>
                <ColorDot></ColorDot>
              </div>
            </div>
            <div className=" absolute text-xs border-zinc-700 border-[1px]  rounded-[0.2rem] bg-zinc-700 text-white items-center justify-center top-3 left-7 p-1">
              Sold out
            </div>
          </li>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <li className="p-3">
            <div className="relative opacity-100 cursor-pointer ">
              <img src="/img/feature/MH40/MH40.webp" alt="before" />
              <img
                src="/img/feature/MH40/MH40_Side.png"
                alt="after"
                className="absolute bottom-0 opacity-0 hover:opacity-100 hover:animate-fadein animate-fadeout  bg-white"
              />
            </div>
            <div className="xxl:p-[39.5px]">
              <div>
                <div>
                  <div className="TopPrice hidden lg:inline-block float-end text-gray-700">
                    €449,00
                  </div>
                  <div className="ModelName cursor-pointer text-sm md:text-xl font-semibold text-gray-700">
                    MH40 Wireless
                  </div>
                </div>
                <div className="Explain my-2 text-sm md:text-lg text-gray-500 font-light">
                  Wireless Over-Ear Headphones
                </div>
                <div className="UnderPrice lg:hidden text-sm text-gray-600 font-bold">
                  €449,00
                </div>
              </div>
              <div className="flex   flex-wrap">
                <ColorDot></ColorDot>
                <ColorDot></ColorDot>
                <ColorDot></ColorDot>
                <ColorDot></ColorDot>
                <ColorDot></ColorDot>
                <ColorDot></ColorDot>
                <ColorDot></ColorDot>
              </div>
            </div>
            <div className=" absolute text-xs border-zinc-700 border-[1px]  rounded-[0.2rem] bg-zinc-700 text-white items-center justify-center top-3 left-7 p-1">
              Sold out
            </div>
          </li>
        </SwiperSlide>
        <SwiperSlide className="relative mr-5">
          <li className="p-3">
            <div className="relative opacity-100 cursor-pointer ">
              <img src="/img/feature/MG20/MG20.png" alt="before" />
              <img
                src="/img/feature/MG20/MG20_Side.png"
                alt="after"
                className="absolute bottom-0 opacity-0 hover:opacity-100 hover:animate-fadein animate-fadeout  bg-white"
              />
            </div>
            <div className="xxl:p-[39.5px]">
              <div>
                <div>
                  <div className="TopPrice hidden lg:inline-block float-end text-gray-700">
                    €469,00
                  </div>
                  <div className="ModelName cursor-pointer text-sm md:text-xl font-semibold text-gray-700">
                    MG20
                  </div>
                </div>
                <div className="Explain my-2 text-sm md:text-lg text-gray-500 font-light">
                  Wireless Gaming Headphones
                </div>
                <div className="UnderPrice lg:hidden text-sm  text-gray-600 font-bold">
                  €469,00
                </div>
              </div>
              <div className="flex   flex-wrap">
                <ColorDot></ColorDot>
                <ColorDot></ColorDot>
                <ColorDot></ColorDot>
                <ColorDot></ColorDot>
                <ColorDot></ColorDot>
              </div>
            </div>
          </li>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Item1;
